import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tk6_03hfh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tk6_03hfh"/>`,
		"fallback": "pinhead:place-of-worship-building",
	});
}

export default Component;
