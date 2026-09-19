import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvilx1q3c.css';
import '../../css/r/rlh241_ia.css';
import '../../css/n/n9yqn6mrh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="kvilx1q3c"><path class="rlh241_ia"/><path class="n9yqn6mrh"/></g>`,
		"fallback": "icon-park:renault",
	});
}

export default Component;
