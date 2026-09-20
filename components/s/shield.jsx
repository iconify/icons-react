import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5yhmcb_r.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5yhmcb_r"/>`,
		"fallback": "octicon:shield",
	});
}

export default Component;
