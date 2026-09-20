import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr3kuvq0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr3kuvq0v"/>`,
		"fallback": "lineicons:nuxt",
	});
}

export default Component;
