import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntxgce8_y.css';
import '../../css/z/z_bqihbse.css';
import '../../css/o/oh4xqr0bv.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntxgce8_y"/><path class="z_bqihbse"/><path class="oh4xqr0bv"/>`,
		"fallback": "tabler-flags:lithuania",
	});
}

export default Component;
