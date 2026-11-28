import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs90746zt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cs90746zt primary"/>`,
		"fallback": "iconaut:type-vertical-duotone",
	});
}

export default Component;
