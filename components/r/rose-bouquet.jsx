import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n_vnbxbgj.css';
import '../../css/o/ojj06wbbq.css';
import '../../css/u/u6obsfyth.css';
import '../../css/s/s3el9pbwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="n_vnbxbgj"/><path class="ojj06wbbq"/><path class="u6obsfyth wm-a"/><path class="s3el9pbwf wm-a"/></g>`,
		"fallback": "withicons:rose-bouquet",
	});
}

export default Component;
