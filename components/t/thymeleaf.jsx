import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/humzy5bxn.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="humzy5bxn"/>`,
		"fallback": "devicon-plain:thymeleaf",
	});
}

export default Component;
