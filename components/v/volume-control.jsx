import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2v34pbio.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2v34pbio"/>`,
		"fallback": "medical-icon:volume-control",
	});
}

export default Component;
