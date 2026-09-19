import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qn3omfa_m.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qn3omfa_m"/>`,
		"fallback": "fluent-mdl2:plug-connected",
	});
}

export default Component;
