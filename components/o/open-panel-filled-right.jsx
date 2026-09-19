import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/segasoa9h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="segasoa9h"/>`,
		"fallback": "carbon:open-panel-filled-right",
	});
}

export default Component;
