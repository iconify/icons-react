import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5452nbip.css';
import '../../css/e/ef2pxlb6n.css';
import '../../css/q/q077labmk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5452nbip"/><path class="ef2pxlb6n"/><path class="q077labmk"/>`,
		"fallback": "energy-icons:oil-tanker-20",
	});
}

export default Component;
