import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw9k31bvw.css';

const viewBox = {"width":240,"height":700};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw9k31bvw"/>`,
		"fallback": "il:triangle-up",
	});
}

export default Component;
