import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed4uzbw1b.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ed4uzbw1b"/>`,
		"fallback": "fluent-mdl2:preview-link",
	});
}

export default Component;
