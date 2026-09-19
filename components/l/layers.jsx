import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if_6tkb7k.css';

const viewBox = {"width":720,"height":840};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="if_6tkb7k"/>`,
		"fallback": "il:layers",
	});
}

export default Component;
