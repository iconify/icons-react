import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lzc0po5kz.css';
import '../../css/i/ii1ti1xhd.css';
import '../../css/a/ait50nbsc.css';
import '../../css/a/a_q96ac8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lzc0po5kz"/><path class="ii1ti1xhd"/><path class="ait50nbsc"/><path class="a_q96ac8w"/></g>`,
		"fallback": "tdesign:saturation",
	});
}

export default Component;
