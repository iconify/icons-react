import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9s903bjk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9s903bjk"/>`,
		"fallback": "fa7-solid:jar",
	});
}

export default Component;
