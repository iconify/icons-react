import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8dgss6_x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8dgss6_x"/>`,
		"fallback": "bi:pentagon-fill",
	});
}

export default Component;
