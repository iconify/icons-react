import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ns0ymobwz.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ns0ymobwz"/>`,
		"fallback": "academicons:philpapers-square",
	});
}

export default Component;
