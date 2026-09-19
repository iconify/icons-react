import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfkm__b4k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfkm__b4k"/>`,
		"fallback": "carbon:music-add",
	});
}

export default Component;
