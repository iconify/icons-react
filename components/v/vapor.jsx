import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l07xjibsd.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l07xjibsd"/>`,
		"fallback": "devicon-plain:vapor",
	});
}

export default Component;
