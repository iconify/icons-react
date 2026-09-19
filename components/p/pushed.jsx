import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-2lnm3ym.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-2lnm3ym"/>`,
		"fallback": "fa7-brands:pushed",
	});
}

export default Component;
