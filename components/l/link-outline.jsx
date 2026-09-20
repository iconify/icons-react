import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fce5mu9wy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fce5mu9wy"/>`,
		"fallback": "lsicon:link-outline",
	});
}

export default Component;
