import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htglb-b1l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htglb-b1l"/>`,
		"fallback": "file-icons:sketchup-layout",
	});
}

export default Component;
