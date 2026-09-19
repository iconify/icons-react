import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo8hqvrwh.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo8hqvrwh"/>`,
		"fallback": "f7:rocket",
	});
}

export default Component;
