import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwe8t-bzi.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwe8t-bzi"/>`,
		"fallback": "devicon-plain:ubuntu",
	});
}

export default Component;
