import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klmhtvbjt.css';

const viewBox = {"width":555,"height":759};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klmhtvbjt"/>`,
		"fallback": "ls:numbersign",
	});
}

export default Component;
