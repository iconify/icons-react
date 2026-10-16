import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz_1o_rty.css';
import '../../css/w/wnd3d9bhl.css';
import '../../css/c/cw2z1nomq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz_1o_rty"/><path class="wnd3d9bhl"/><path class="cw2z1nomq"/>`,
		"fallback": "energy-icons:safety-boot-20-bold",
	});
}

export default Component;
