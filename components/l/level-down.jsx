import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftn1mcb_a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftn1mcb_a"/>`,
		"fallback": "cil:level-down",
	});
}

export default Component;
