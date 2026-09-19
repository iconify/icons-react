import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8ly66bpp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8ly66bpp"/>`,
		"fallback": "bi:people",
	});
}

export default Component;
