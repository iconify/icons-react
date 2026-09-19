import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obwoa8b3s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obwoa8b3s"/>`,
		"fallback": "at-icons:slide-switch",
	});
}

export default Component;
