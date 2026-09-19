import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/azmrzvbjh.css';
import '../../css/q/qr4j1acqm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="azmrzvbjh"/><path class="qr4j1acqm"/></g>`,
		"fallback": "cryptocurrency-color:poe",
	});
}

export default Component;
