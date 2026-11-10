import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8py-sbum.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8py-sbum"/>`,
		"fallback": "at-icons:ufo",
	});
}

export default Component;
