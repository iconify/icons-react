import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbr59b2hl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbr59b2hl"/>`,
		"fallback": "ix:open-external",
	});
}

export default Component;
