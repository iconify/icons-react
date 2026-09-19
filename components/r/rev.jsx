import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db9rc0bdn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db9rc0bdn"/>`,
		"fallback": "fa7-brands:rev",
	});
}

export default Component;
