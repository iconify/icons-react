import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eporl6ber.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eporl6ber"/>`,
		"fallback": "devicon:prisma",
	});
}

export default Component;
