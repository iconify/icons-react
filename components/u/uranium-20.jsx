import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx8zhcwih.css';
import '../../css/z/zcanx4ban.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wx8zhcwih"/><path class="zcanx4ban"/>`,
		"fallback": "energy-icons:uranium-20",
	});
}

export default Component;
