import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/f/fj8mgub1r.css';
import '../../css/y/y-i__ff-j.css';
import '../../css/z/z7h9dmbpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="fj8mgub1r"/><path class="y-i__ff-j"/><rect class="z7h9dmbpz"/></g>`,
		"fallback": "mage:three-d-box-square",
	});
}

export default Component;
