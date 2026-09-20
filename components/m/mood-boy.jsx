import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pxfupjbgw.css';
import '../../css/u/un3d3yeja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pxfupjbgw"/><path class="un3d3yeja"/></g>`,
		"fallback": "tabler:mood-boy",
	});
}

export default Component;
