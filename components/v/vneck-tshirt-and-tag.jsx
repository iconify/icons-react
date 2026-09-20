import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9du6swsh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9du6swsh"/>`,
		"fallback": "pinhead:vneck-tshirt-and-tag",
	});
}

export default Component;
