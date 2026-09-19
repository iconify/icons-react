import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1yn-jb2k.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1yn-jb2k"/>`,
		"fallback": "garden:pin-fill-12",
	});
}

export default Component;
