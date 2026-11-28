import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv42hnbqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv42hnbqr"/>`,
		"fallback": "noviair:plane-check",
	});
}

export default Component;
