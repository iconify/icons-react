import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8u4d0zwp.css';
import '../../css/m/ms064kbuz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8u4d0zwp"/><path class="ms064kbuz"/>`,
		"fallback": "carbon:map-boundary",
	});
}

export default Component;
