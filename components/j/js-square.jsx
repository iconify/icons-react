import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl_57ib0s.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hl_57ib0s"/>`,
		"fallback": "fa7-brands:js-square",
	});
}

export default Component;
