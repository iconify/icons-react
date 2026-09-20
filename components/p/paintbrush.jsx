import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy8a-7mcg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oy8a-7mcg"/>`,
		"fallback": "pinhead:paintbrush",
	});
}

export default Component;
