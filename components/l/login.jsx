import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni0-8obrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni0-8obrj"/>`,
		"fallback": "mdi-light:login",
	});
}

export default Component;
