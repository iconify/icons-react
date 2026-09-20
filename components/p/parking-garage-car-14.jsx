import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/geth3h_ed.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="geth3h_ed"/>`,
		"fallback": "osmic:parking-garage-car-14",
	});
}

export default Component;
