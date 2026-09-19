import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1k0_9_to.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1k0_9_to"/>`,
		"fallback": "at-icons:smiley-face",
	});
}

export default Component;
