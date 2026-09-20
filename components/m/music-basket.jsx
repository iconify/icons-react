import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xjdos9exn.css';
import '../../css/o/ohpbju5jc.css';
import '../../css/d/dag-dkc4k.css';
import '../../css/y/yogb4gebd.css';
import '../../css/s/s5kxay-fy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xjdos9exn"/><path class="ohpbju5jc"/><path class="dag-dkc4k"/><path class="yogb4gebd"/><path class="s5kxay-fy"/></g>`,
		"fallback": "streamline-freehand-color:music-basket",
	});
}

export default Component;
