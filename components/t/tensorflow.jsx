import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfpp4qbmp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfpp4qbmp"/>`,
		"fallback": "devicon:tensorflow",
	});
}

export default Component;
