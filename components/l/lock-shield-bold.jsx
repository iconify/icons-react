import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1cnlywwj.css';
import '../../css/w/w0dn1zvis.css';
import '../../css/y/yu09v8bye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1cnlywwj"/><path class="w0dn1zvis"/><path class="yu09v8bye"/>`,
		"fallback": "streamline-ultimate:lock-shield-bold",
	});
}

export default Component;
