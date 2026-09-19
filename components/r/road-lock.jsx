import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2sxe262x.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2sxe262x"/>`,
		"fallback": "fa6-solid:road-lock",
	});
}

export default Component;
