import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k2zfv2bxk.css';
import '../../css/o/o9v6_hbxs.css';
import '../../css/y/y8p_yxbzv.css';
import '../../css/a/aadms3bvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="k2zfv2bxk wm-shadow"/><path class="o9v6_hbxs"/><path class="y8p_yxbzv"/><path class="aadms3bvy"/></g>`,
		"fallback": "withicons-retro:sun",
	});
}

export default Component;
