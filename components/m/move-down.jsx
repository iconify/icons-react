import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co3z9ob3r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co3z9ob3r"/>`,
		"fallback": "icomoon-free:move-down",
	});
}

export default Component;
