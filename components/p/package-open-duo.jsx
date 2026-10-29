import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tw3fmz2fp.css';
import '../../css/j/jgkke34ed.css';
import '../../css/p/p0ewt213x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="tw3fmz2fp wm-a"/><path class="jgkke34ed wm-a"/><path class="p0ewt213x"/></g>`,
		"fallback": "withicons:package-open-duo",
	});
}

export default Component;
