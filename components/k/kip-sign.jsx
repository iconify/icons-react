import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuw2e-bil.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fuw2e-bil"/>`,
		"fallback": "fa7-solid:kip-sign",
	});
}

export default Component;
