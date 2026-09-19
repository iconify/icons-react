import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbzvq64yg.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbzvq64yg"/>`,
		"fallback": "fa7-brands:linux",
	});
}

export default Component;
