import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a84atto0y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a84atto0y"/>`,
		"fallback": "ix:surveillance-cancelled",
	});
}

export default Component;
