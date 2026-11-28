import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hqm2qbcec.css';
import '../../css/j/jjvyhvb4o.css';
import '../../css/b/botn2_sad.css';
import '../../css/z/zhdj_yccb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="hqm2qbcec"/><path class="jjvyhvb4o"/><path class="botn2_sad"/><path class="zhdj_yccb"/></g>`,
		"fallback": "iconaut:share",
	});
}

export default Component;
