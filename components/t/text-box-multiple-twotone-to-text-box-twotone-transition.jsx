import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/j/j6sn3x.css';
import '../../css/h/hrkd6c.css';
import '../../css/d/d-0mee5h.css';
import '../../css/d/d-r5jj3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew j6sn3x"/><path class="hrkd6c iw1iew"/>`,
		"fallback": "line-md:text-box-multiple-twotone-to-text-box-twotone-transition",
	});
}

export default Component;
