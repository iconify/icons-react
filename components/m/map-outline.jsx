import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h54a1dbvn.css';
import '../../css/k/kf_yp9bvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="map-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="h54a1dbvn"/><path class="kf_yp9bvr"/></g></g>`,
		"fallback": "cuida:map-outline",
	});
}

export default Component;
