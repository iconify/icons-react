import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_mzs6bfj.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_mzs6bfj"/>`,
		"fallback": "dinkie-icons:translate-hangul-latin",
	});
}

export default Component;
