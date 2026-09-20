import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua2we0bzm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ua2we0bzm"/>`,
		"fallback": "la:pinterest",
	});
}

export default Component;
