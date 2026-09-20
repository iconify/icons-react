import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlh-5mb2d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlh-5mb2d"/>`,
		"fallback": "la:robot-solid",
	});
}

export default Component;
