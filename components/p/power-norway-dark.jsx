import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kddhxzb2l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kddhxzb2l"/>`,
		"fallback": "selfhst:power-norway-dark",
	});
}

export default Component;
