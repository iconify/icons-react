import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdu7mj1ef.css';

const viewBox = {"width":668,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdu7mj1ef"/>`,
		"fallback": "ls:music",
	});
}

export default Component;
