import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3793b6te.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3793b6te"/>`,
		"fallback": "pinhead:seaplane-descending-above-water",
	});
}

export default Component;
