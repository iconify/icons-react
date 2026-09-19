import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dok0cd5zg.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dok0cd5zg"/>`,
		"fallback": "fluent-mdl2:release-gate-error",
	});
}

export default Component;
