import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7iwjlcxb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7iwjlcxb"/>`,
		"fallback": "heroicons:squares-plus-20-solid",
	});
}

export default Component;
