import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9fy51bke.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9fy51bke"/>`,
		"fallback": "fa7-brands:qq",
	});
}

export default Component;
