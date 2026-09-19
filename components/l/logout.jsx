import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rnklyrfrw.css';
import '../../css/k/k51n74bqf.css';
import '../../css/g/g4ut-jbsr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="rnklyrfrw"/><path class="k51n74bqf"/><path class="g4ut-jbsr"/></g>`,
		"fallback": "icon-park:logout",
	});
}

export default Component;
