import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6ghr8bhm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6ghr8bhm"/>`,
		"fallback": "energy-icons:underline-20",
	});
}

export default Component;
