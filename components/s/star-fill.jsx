import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twolibc3v.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twolibc3v"/>`,
		"fallback": "f7:star-fill",
	});
}

export default Component;
