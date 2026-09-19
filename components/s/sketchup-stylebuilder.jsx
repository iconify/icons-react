import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hto5tzmnn.css';

const viewBox = {"width":482,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hto5tzmnn"/>`,
		"fallback": "file-icons:sketchup-stylebuilder",
	});
}

export default Component;
