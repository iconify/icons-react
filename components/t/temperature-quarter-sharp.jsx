import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xv2bvdxhy.css';
import '../../css/k/k8te4qbon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="xv2bvdxhy"/><path class="k8te4qbon"/></g>`,
		"fallback": "keyline-icons:temperature-quarter-sharp",
	});
}

export default Component;
