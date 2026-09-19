import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sq2_p6b2r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sq2_p6b2r"/>`,
		"fallback": "cryptocurrency:soc",
	});
}

export default Component;
