import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlm58cv6b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlm58cv6b"/>`,
		"fallback": "cil:locomotive",
	});
}

export default Component;
