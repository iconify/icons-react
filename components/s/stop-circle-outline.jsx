import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wckr9kb1z.css';
import '../../css/p/ppc-_hb4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wckr9kb1z"/><path class="ppc-_hb4f"/>`,
		"fallback": "eva:stop-circle-outline",
	});
}

export default Component;
