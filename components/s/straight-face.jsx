import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x-83soh2y.css';
import '../../css/j/jc0drs6nr.css';
import '../../css/c/cgp9kxg8p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x-83soh2y"/><path class="jc0drs6nr"/><path class="cgp9kxg8p"/></g>`,
		"fallback": "streamline-color:straight-face",
	});
}

export default Component;
