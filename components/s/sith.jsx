import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9buqbc8l.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9buqbc8l"/>`,
		"fallback": "fa7-brands:sith",
	});
}

export default Component;
