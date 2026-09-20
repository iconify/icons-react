import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr1_dtboh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr1_dtboh"/>`,
		"fallback": "pinhead:o",
	});
}

export default Component;
