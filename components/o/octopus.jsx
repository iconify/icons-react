import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axae4tbjw.css';
import '../../css/c/cmgm03bvr.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axae4tbjw"/><path class="cmgm03bvr"/>`,
		"fallback": "thesvg-color:octopus",
	});
}

export default Component;
