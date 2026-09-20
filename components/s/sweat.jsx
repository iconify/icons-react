import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk-2f43fg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk-2f43fg"/>`,
		"fallback": "token:sweat",
	});
}

export default Component;
