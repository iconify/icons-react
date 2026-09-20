import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf68w40sk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf68w40sk"/>`,
		"fallback": "material-icon-theme:vercel-light",
	});
}

export default Component;
