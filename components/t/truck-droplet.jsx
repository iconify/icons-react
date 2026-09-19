import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isoiw1bin.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isoiw1bin"/>`,
		"fallback": "fa7-solid:truck-droplet",
	});
}

export default Component;
