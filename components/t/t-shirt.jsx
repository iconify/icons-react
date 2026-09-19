import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/g2varx82w.css';
import '../../css/a/ath4nsb8r.css';
import '../../css/o/ofyi_e0mt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="g2varx82w"/><path class="ath4nsb8r"/><path class="ofyi_e0mt"/></g>`,
		"fallback": "icon-park:t-shirt",
	});
}

export default Component;
