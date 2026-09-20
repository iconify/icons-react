import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a178mxb4x.css';
import '../../css/k/kxminbc8t.css';

const viewBox = {"width":166.73,"height":36.738};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a178mxb4x"/><path class="kxminbc8t"/>`,
		"fallback": "thesvg-color:kakao-bank",
	});
}

export default Component;
