import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy6cbetxh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy6cbetxh"/>`,
		"fallback": "carbon:join-outer",
	});
}

export default Component;
