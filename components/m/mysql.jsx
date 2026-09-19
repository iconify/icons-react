import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg2igbgln.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg2igbgln"/>`,
		"fallback": "devicon:mysql",
	});
}

export default Component;
