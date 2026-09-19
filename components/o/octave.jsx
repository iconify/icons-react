import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjnocacyx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjnocacyx"/>`,
		"fallback": "file-icons:octave",
	});
}

export default Component;
