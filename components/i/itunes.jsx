import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x220hub6r.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x220hub6r"/>`,
		"fallback": "fa7-brands:itunes",
	});
}

export default Component;
