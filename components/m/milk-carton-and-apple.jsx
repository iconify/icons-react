import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_yatmezl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_yatmezl"/>`,
		"fallback": "pinhead:milk-carton-and-apple",
	});
}

export default Component;
