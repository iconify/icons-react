import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c44cj2bit.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c44cj2bit"/>`,
		"fallback": "carbon:png",
	});
}

export default Component;
