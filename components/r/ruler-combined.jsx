import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e296fw0ge.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e296fw0ge"/>`,
		"fallback": "fa7-solid:ruler-combined",
	});
}

export default Component;
