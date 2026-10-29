import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j4e45e79l.css';
import '../../css/v/vvzmr-fai.css';
import '../../css/k/kc7our_sj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="j4e45e79l"/><path class="vvzmr-fai wm-a"/><path class="kc7our_sj wm-s"/></g>`,
		"fallback": "withicons:paint-bucket-solid",
	});
}

export default Component;
