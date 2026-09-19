import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnz6y-bzb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnz6y-bzb"/>`,
		"fallback": "cib:redux",
	});
}

export default Component;
