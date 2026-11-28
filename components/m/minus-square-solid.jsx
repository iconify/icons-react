import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjtqftb6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjtqftb6h"/>`,
		"fallback": "iconaut:minus-square-solid",
	});
}

export default Component;
