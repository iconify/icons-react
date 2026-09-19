import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwa1tvb5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwa1tvb5b"/>`,
		"fallback": "boxicons:magic-wand",
	});
}

export default Component;
