import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2d2pp2dw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2d2pp2dw"/>`,
		"fallback": "carbon:plane-sea",
	});
}

export default Component;
