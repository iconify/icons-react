import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6lpuzb1n.css';
import '../../css/p/pkogtxbhl.css';
import '../../css/o/o0054bc1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6lpuzb1n"/><path clip-rule="evenodd" class="pkogtxbhl"/><path class="o0054bc1r"/>`,
		"fallback": "token:mork",
	});
}

export default Component;
