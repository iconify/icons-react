import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tirg10poz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tirg10poz"/>`,
		"fallback": "selfhst:uber-dark",
	});
}

export default Component;
