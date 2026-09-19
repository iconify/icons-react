import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6pg4ekhn.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6pg4ekhn"/>`,
		"fallback": "f7:square-arrow-down",
	});
}

export default Component;
