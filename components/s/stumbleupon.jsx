import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mx3e_tbqb.css';

const viewBox = {"width":1920,"height":1472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mx3e_tbqb"/>`,
		"fallback": "fa:stumbleupon",
	});
}

export default Component;
