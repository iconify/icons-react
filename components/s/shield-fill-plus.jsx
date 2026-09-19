import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw1gbqudo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw1gbqudo"/>`,
		"fallback": "bi:shield-fill-plus",
	});
}

export default Component;
