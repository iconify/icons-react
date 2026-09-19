import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzzr42bvz.css';
import '../../css/i/ieg0qmbgj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzzr42bvz"/><path class="ieg0qmbgj"/>`,
		"fallback": "carbon:spray-paint",
	});
}

export default Component;
