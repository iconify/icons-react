import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/si0ilm6lo.css';
import '../../css/h/h27ihsf5q.css';
import '../../css/p/pfuoo_vfp.css';
import '../../css/z/zu7t2wbxf.css';
import '../../css/s/sdi9acbkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="si0ilm6lo"/><path class="h27ihsf5q wm-a"/><path class="pfuoo_vfp"/><path class="wm-a zu7t2wbxf"/><path class="sdi9acbkd"/></g>`,
		"fallback": "withicons:users-duo",
	});
}

export default Component;
