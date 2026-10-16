import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aat5akb2r.css';
import '../../css/x/xpyjtvwnm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aat5akb2r"/><path class="xpyjtvwnm"/>`,
		"fallback": "energy-icons:voltage-high-20",
	});
}

export default Component;
