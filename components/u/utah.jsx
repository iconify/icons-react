import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkw_m7m-r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkw_m7m-r"/>`,
		"fallback": "pinhead:utah",
	});
}

export default Component;
