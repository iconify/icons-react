import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dug7ikade.css';
import '../../css/r/rdpa0xr8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dug7ikade"/><path class="rdpa0xr8r"/></g>`,
		"fallback": "tabler:truck-off",
	});
}

export default Component;
