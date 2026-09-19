import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_xunsc5x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_xunsc5x"/>`,
		"fallback": "carbon:plane",
	});
}

export default Component;
