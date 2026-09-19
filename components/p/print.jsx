import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obwtl28pf.css';
import '../../css/k/keushub5r.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obwtl28pf"/><path class="keushub5r"/>`,
		"fallback": "foundation:print",
	});
}

export default Component;
