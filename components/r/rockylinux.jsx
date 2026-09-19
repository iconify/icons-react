import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzo-wiasf.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzo-wiasf"/>`,
		"fallback": "devicon:rockylinux",
	});
}

export default Component;
