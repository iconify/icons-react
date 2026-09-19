import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyl2dfb3b.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyl2dfb3b"/>`,
		"fallback": "devicon-plain:pandas",
	});
}

export default Component;
