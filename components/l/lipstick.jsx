import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmgati1sa.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmgati1sa"/>`,
		"fallback": "pinhead:lipstick",
	});
}

export default Component;
