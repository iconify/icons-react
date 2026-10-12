import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz11l89yb.css';
import '../../css/o/oimt4ji_g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uz11l89yb"/><path class="oimt4ji_g"/>`,
		"fallback": "garden:phone-arrow-right-stroke-20",
	});
}

export default Component;
