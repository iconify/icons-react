import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lkcvmf63g.css';
import '../../css/m/m0-rokbhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="lkcvmf63g"/><path class="m0-rokbhg wm-a"/></g>`,
		"fallback": "withicons:video-camera-solid",
	});
}

export default Component;
