import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy7z0yolq.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cy7z0yolq"/>`,
		"fallback": "fa7-solid:location-pin-lock",
	});
}

export default Component;
