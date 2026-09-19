import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvyfft4ni.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvyfft4ni"/>`,
		"fallback": "garden:knowledge-base-26",
	});
}

export default Component;
