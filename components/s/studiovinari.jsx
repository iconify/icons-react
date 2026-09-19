import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn2-7pgaz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn2-7pgaz"/>`,
		"fallback": "fa7-brands:studiovinari",
	});
}

export default Component;
