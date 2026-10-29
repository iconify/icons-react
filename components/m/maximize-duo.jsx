import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vw2d3v36t.css';
import '../../css/p/p3_r2hr6d.css';
import '../../css/z/z2cmsqfjo.css';
import '../../css/b/b12zfebmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vw2d3v36t"/><path class="p3_r2hr6d wm-a"/><path class="z2cmsqfjo"/><path class="b12zfebmf wm-a"/></g>`,
		"fallback": "withicons:maximize-duo",
	});
}

export default Component;
