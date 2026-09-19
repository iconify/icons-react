import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unpyfobgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unpyfobgu"/>`,
		"fallback": "iconamoon:sign-plus-minus-light",
	});
}

export default Component;
