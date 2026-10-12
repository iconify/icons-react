import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrai4biei.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrai4biei"/>`,
		"fallback": "garden:slider-fill-20",
	});
}

export default Component;
