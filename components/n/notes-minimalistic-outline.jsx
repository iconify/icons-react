import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv0tzjduf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bv0tzjduf"/>`,
		"fallback": "solar:notes-minimalistic-outline",
	});
}

export default Component;
