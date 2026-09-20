import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jidg0csbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jidg0csbz"/>`,
		"fallback": "thesvg:tryhackme",
	});
}

export default Component;
