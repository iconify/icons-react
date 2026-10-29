import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tltd-smyd.css';
import '../../css/e/ehz_gxbyn.css';
import '../../css/j/jh5_0cbif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="tltd-smyd"/><path class="ehz_gxbyn wm-a"/><path class="jh5_0cbif"/></g>`,
		"fallback": "withicons:speaker-duo",
	});
}

export default Component;
