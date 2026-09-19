import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dubu0bb3r.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dubu0bb3r"/>`,
		"fallback": "foundation:pound",
	});
}

export default Component;
