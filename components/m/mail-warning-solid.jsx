import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mb2q__b4l.css';
import '../../css/c/csvol5b-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="mb2q__b4l"/><path class="csvol5b-k wm-s"/></g>`,
		"fallback": "withicons:mail-warning-solid",
	});
}

export default Component;
