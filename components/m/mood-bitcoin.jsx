import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q8nc_j7iv.css';
import '../../css/u/uorfpabpi.css';
import '../../css/h/h9g0rb1hz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q8nc_j7iv"/><path class="uorfpabpi"/><path class="h9g0rb1hz"/></g>`,
		"fallback": "tabler:mood-bitcoin",
	});
}

export default Component;
