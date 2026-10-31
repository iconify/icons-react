import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/w8cdvmb8r.css';
import '../../css/d/dkv54xjtw.css';
import '../../css/k/kdo4s3bdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="w8cdvmb8r wm-shadow"/><path class="dkv54xjtw"/><path class="kdo4s3bdr"/></g>`,
		"fallback": "withicons-retro:scan-search",
	});
}

export default Component;
