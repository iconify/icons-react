import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhunhxbxt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhunhxbxt"/>`,
		"fallback": "selfhst:kavita-light",
	});
}

export default Component;
