import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mz7sfebmp.css';
import '../../css/r/r1sq3_b1a.css';
import '../../css/o/o3f_tobae.css';
import '../../css/a/a5pz_ebju.css';
import '../../css/m/mkvk09g2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="mz7sfebmp wm-shadow"/><path class="r1sq3_b1a"/><path class="o3f_tobae"/><path class="a5pz_ebju"/><path class="mkvk09g2y"/></g>`,
		"fallback": "withicons-retro:stop",
	});
}

export default Component;
