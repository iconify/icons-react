import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mihdcfm_z.css';
import '../../css/h/hg49fbbmh.css';
import '../../css/y/y-s5x4bgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mihdcfm_z"/><path class="hg49fbbmh"/><path class="y-s5x4bgn"/></g>`,
		"fallback": "feather:upload-cloud",
	});
}

export default Component;
