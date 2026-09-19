import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp0xqacie.css';
import '../../css/y/ycdb5-nqk.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp0xqacie"/><path class="ycdb5-nqk"/>`,
		"fallback": "devicon:reflex",
	});
}

export default Component;
