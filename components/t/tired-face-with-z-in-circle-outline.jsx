import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1o_wkb4b.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1o_wkb4b"/>`,
		"fallback": "pinhead:tired-face-with-z-in-circle-outline",
	});
}

export default Component;
