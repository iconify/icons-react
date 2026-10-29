import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y66tk2b3s.css';
import '../../css/b/bn0hr-51d.css';
import '../../css/n/nblhhoaam.css';
import '../../css/u/u-54s3bed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wm-k y66tk2b3s"/><path class="bn0hr-51d wm-k"/><path class="nblhhoaam wm-k"/><path class="u-54s3bed wm-shine"/></g>`,
		"fallback": "withicons-anime:play",
	});
}

export default Component;
