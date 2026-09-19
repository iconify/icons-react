import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w51hlzb8t.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w51hlzb8t"/>`,
		"fallback": "fa7-brands:square-facebook",
	});
}

export default Component;
