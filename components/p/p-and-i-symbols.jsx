import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egumi9b1d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egumi9b1d"/>`,
		"fallback": "ix:p-and-i-symbols",
	});
}

export default Component;
