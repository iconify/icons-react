import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e12qxeb-b.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e12qxeb-b"/>`,
		"fallback": "garden:trash-stroke-12",
	});
}

export default Component;
