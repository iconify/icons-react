import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8t899j6n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8t899j6n"/>`,
		"fallback": "carbon:skill-level-intermediate",
	});
}

export default Component;
