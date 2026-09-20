import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7xrhg4uz.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7xrhg4uz"/>`,
		"fallback": "memory:rotate-clockwise",
	});
}

export default Component;
