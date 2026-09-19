import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yimxbdbkz.css';
import '../../css/c/cfhd2dbby.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yimxbdbkz"/><path class="cfhd2dbby"/>`,
		"fallback": "carbon:phone-voice",
	});
}

export default Component;
