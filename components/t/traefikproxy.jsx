import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3794mo3i.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3794mo3i"/>`,
		"fallback": "devicon:traefikproxy",
	});
}

export default Component;
