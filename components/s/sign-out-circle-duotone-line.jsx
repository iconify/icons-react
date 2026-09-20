import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hoe8utbjq.css';
import '../../css/n/nx5_b02uq.css';
import '../../css/g/g_mnfyb1n.css';
import '../../css/l/ljl57vbuf.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGKiYMDeJB"><g class="ft5dv1b6b"><circle transform="matrix(0 -1 -1 0 20 18)" class="hoe8utbjq"/><path class="nx5_b02uq"/><path class="g_mnfyb1n"/><path class="ljl57vbuf"/></g></mask></defs><path mask="url(#SVGKiYMDeJB)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:sign-out-circle-duotone-line",
	});
}

export default Component;
