import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3-tx0tsu.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3-tx0tsu"/>`,
		"fallback": "f7:paperclip",
	});
}

export default Component;
