import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnkd0xb5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnkd0xb5n"/>`,
		"fallback": "proicons:spacebar",
	});
}

export default Component;
