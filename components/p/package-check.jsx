import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bnwis3bxs.css';
import '../../css/v/v93eny-eg.css';
import '../../css/o/osgbtpodr.css';
import '../../css/d/dyawbzbqh.css';
import '../../css/b/b2wk6h4yu.css';
import '../../css/u/uizl2ebeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bnwis3bxs wm-k"/><path class="v93eny-eg wm-s"/><path class="osgbtpodr wm-deco"/><path class="dyawbzbqh wm-k"/><path class="b2wk6h4yu wm-s"/><path class="uizl2ebeb wm-shadow"/></g>`,
		"fallback": "withicons-valentine:package-check",
	});
}

export default Component;
