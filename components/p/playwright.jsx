import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fouy3m4oz.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fouy3m4oz"/>`,
		"fallback": "devicon-plain:playwright",
	});
}

export default Component;
