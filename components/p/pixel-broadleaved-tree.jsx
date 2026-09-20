import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nss30vccu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nss30vccu"/>`,
		"fallback": "pinhead:pixel-broadleaved-tree",
	});
}

export default Component;
