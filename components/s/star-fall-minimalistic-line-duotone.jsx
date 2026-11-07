import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vfyjxnopo.css';
import '../../css/c/czwlizb6n.css';
import '../../css/k/k-qmgxbel.css';
import '../../css/e/ej9c85b1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vfyjxnopo"/><path class="czwlizb6n"/><path class="k-qmgxbel"/><path class="ej9c85b1m"/></g>`,
		"fallback": "solar:star-fall-minimalistic-line-duotone",
	});
}

export default Component;
