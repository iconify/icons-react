import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7app61-l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7app61-l"/>`,
		"fallback": "pinhead:pixel-classical-building",
	});
}

export default Component;
