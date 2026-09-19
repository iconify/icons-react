import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3_vvgb0g.css';

const viewBox = {"width":240,"height":700};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3_vvgb0g"/>`,
		"fallback": "il:select",
	});
}

export default Component;
