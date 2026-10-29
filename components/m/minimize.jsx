import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vw2d3v36t.css';
import '../../css/g/gjffvyjta.css';
import '../../css/z/z2cmsqfjo.css';
import '../../css/m/m8z7zkbik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vw2d3v36t"/><path class="gjffvyjta wm-a"/><path class="z2cmsqfjo"/><path class="m8z7zkbik wm-a"/></g>`,
		"fallback": "withicons:minimize",
	});
}

export default Component;
