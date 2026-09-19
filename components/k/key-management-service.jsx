import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kzytk1b6j.css';
import '../../css/f/fdhkvebrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="kzytk1b6j"/><path class="fdhkvebrt"/></g>`,
		"fallback": "gcp:key-management-service",
	});
}

export default Component;
