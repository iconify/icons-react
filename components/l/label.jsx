import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hv62pmbfb.css';
import '../../css/t/ta90ekbqr.css';
import '../../css/v/vhqenwbef.css';
import '../../css/u/unrbvebfg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hv62pmbfb"/><path class="ta90ekbqr"/><path class="vhqenwbef"/><path class="unrbvebfg"/></g>`,
		"fallback": "fluent-emoji-flat:label",
	});
}

export default Component;
