import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/skfvawb1x.css';
import '../../css/f/f-niy2zzm.css';
import '../../css/l/lqrq-fbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="skfvawb1x"/><path class="f-niy2zzm"/><path class="lqrq-fbvx"/></g>`,
		"fallback": "withicons-bauhaus:rows",
	});
}

export default Component;
