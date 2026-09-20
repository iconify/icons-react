import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bs4ym0b3p.css';
import '../../css/d/dp1f6j7dg.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bs4ym0b3p"/><path class="dp1f6j7dg"/>`,
		"fallback": "iwwa:remove-1y",
	});
}

export default Component;
