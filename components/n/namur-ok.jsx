import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if-aux86e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="if-aux86e"/>`,
		"fallback": "ix:namur-ok",
	});
}

export default Component;
