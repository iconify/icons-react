import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qosvqvk2k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qosvqvk2k"/>`,
		"fallback": "pinhead:pixel-circle",
	});
}

export default Component;
