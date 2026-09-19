import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csg1b869a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csg1b869a"/>`,
		"fallback": "bi:toggle-on",
	});
}

export default Component;
