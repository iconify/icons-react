import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yp_mb0bvb.css';
import '../../css/w/w3ie_cv-x.css';
import '../../css/t/tu-453b3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yp_mb0bvb"/><path class="w3ie_cv-x"/><path class="tu-453b3v"/></g>`,
		"fallback": "tabler:photo-circle-minus",
	});
}

export default Component;
