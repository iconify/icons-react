import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlo5nub7t.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlo5nub7t"/>`,
		"fallback": "fluent-mdl2:triangle-solid-down-12",
	});
}

export default Component;
