import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl0efihro.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl0efihro"/>`,
		"fallback": "ion:md-share",
	});
}

export default Component;
