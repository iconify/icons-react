import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf-s5qb_j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mf-s5qb_j"/>`,
		"fallback": "ix:runtime-stop",
	});
}

export default Component;
