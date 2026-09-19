import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cm44b4gnb.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cm44b4gnb"/>`,
		"fallback": "fa7-brands:vsco",
	});
}

export default Component;
