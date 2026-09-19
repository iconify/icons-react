import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg8ren7cc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg8ren7cc"/>`,
		"fallback": "fxemoji:largeorangediamond",
	});
}

export default Component;
