import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a2sj1yb5u.css';
import '../../css/k/k8gma68_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="a2sj1yb5u"/><path class="k8gma68_z"/></g>`,
		"fallback": "hugeicons:waving-hand-02",
	});
}

export default Component;
