import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gcovwxb8m.css';
import '../../css/m/m0-rokbhg.css';
import '../../css/z/zm4nneb0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="gcovwxb8m"/><path class="m0-rokbhg wm-a"/><path class="wm-s zm4nneb0e"/></g>`,
		"fallback": "withicons:video-plus-solid",
	});
}

export default Component;
