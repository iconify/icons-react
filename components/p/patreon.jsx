import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5do6h3hl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5do6h3hl"/>`,
		"fallback": "fa7-brands:patreon",
	});
}

export default Component;
