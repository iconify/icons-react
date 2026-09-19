import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/foxnmub8w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="foxnmub8w"/>`,
		"fallback": "ion:md-disc",
	});
}

export default Component;
