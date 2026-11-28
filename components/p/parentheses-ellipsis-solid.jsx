import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd7mk0b-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd7mk0b-g"/>`,
		"fallback": "iconaut:parentheses-ellipsis-solid",
	});
}

export default Component;
