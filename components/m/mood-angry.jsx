import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xgaa-1bvs.css';
import '../../css/s/sl910ib-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xgaa-1bvs"/><path class="sl910ib-z"/></g>`,
		"fallback": "tabler:mood-angry",
	});
}

export default Component;
