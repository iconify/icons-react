import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sg5ayqbfb.css';
import '../../css/x/xem9jybpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sg5ayqbfb"/><path class="xem9jybpf"/></g>`,
		"fallback": "andrsrxn:share-network",
	});
}

export default Component;
