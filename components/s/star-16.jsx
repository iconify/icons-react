import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyjxwfb_d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyjxwfb_d"/>`,
		"fallback": "octicon:star-16",
	});
}

export default Component;
