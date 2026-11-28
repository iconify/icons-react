import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/niubgw59c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="niubgw59c"/>`,
		"fallback": "iconaut:number-3-duo",
	});
}

export default Component;
