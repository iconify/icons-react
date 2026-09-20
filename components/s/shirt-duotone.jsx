import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwjty5okl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwjty5okl"/>`,
		"fallback": "keyline-icons:shirt-duotone",
	});
}

export default Component;
