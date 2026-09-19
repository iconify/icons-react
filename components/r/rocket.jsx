import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odd7xt2tc.css';
import '../../css/j/jt3_i6qzm.css';
import '../../css/l/l_3itzz6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odd7xt2tc"/><circle class="jt3_i6qzm"/><path class="l_3itzz6h"/>`,
		"fallback": "bx:rocket",
	});
}

export default Component;
