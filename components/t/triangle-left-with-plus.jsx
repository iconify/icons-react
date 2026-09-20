import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq-njj5ir.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq-njj5ir"/>`,
		"fallback": "pinhead:triangle-left-with-plus",
	});
}

export default Component;
