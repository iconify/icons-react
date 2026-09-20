import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljgadcc1z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljgadcc1z"/>`,
		"fallback": "material-icon-theme:remix-light",
	});
}

export default Component;
