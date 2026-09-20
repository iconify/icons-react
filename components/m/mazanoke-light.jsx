import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k56efgb3s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k56efgb3s"/>`,
		"fallback": "selfhst:mazanoke-light",
	});
}

export default Component;
