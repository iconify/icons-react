import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdtvnc2lo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdtvnc2lo"/>`,
		"fallback": "carbon:loop",
	});
}

export default Component;
