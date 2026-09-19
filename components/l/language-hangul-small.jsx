import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpeg90bzc.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpeg90bzc"/>`,
		"fallback": "dinkie-icons:language-hangul-small",
	});
}

export default Component;
