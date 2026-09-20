import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf2tuqcuu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf2tuqcuu"/>`,
		"fallback": "octicon:spacing-small-16",
	});
}

export default Component;
