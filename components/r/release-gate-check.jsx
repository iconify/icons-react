import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t37m8-r3t.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t37m8-r3t"/>`,
		"fallback": "fluent-mdl2:release-gate-check",
	});
}

export default Component;
