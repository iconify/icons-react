import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csg_4pb1f.css';

const viewBox = {"width":491,"height":735};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csg_4pb1f"/>`,
		"fallback": "ls:k-upper-case",
	});
}

export default Component;
