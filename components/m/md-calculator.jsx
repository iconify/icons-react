import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m12m9vb9g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m12m9vb9g"/>`,
		"fallback": "ion:md-calculator",
	});
}

export default Component;
