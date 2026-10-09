import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kh3h573jo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kh3h573jo"/>`,
		"fallback": "energy-icons:user-check-20",
	});
}

export default Component;
