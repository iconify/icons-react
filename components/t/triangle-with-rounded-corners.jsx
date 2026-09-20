import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvaz16bmf.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvaz16bmf"/>`,
		"fallback": "openmoji:triangle-with-rounded-corners",
	});
}

export default Component;
