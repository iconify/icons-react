import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-vp-bb3x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-vp-bb3x"/>`,
		"fallback": "pinhead:plug",
	});
}

export default Component;
