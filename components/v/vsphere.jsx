import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyun3gb_q.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyun3gb_q"/>`,
		"fallback": "thesvg:vsphere",
	});
}

export default Component;
