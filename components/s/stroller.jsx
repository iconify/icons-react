import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f19ei9bez.css';
import '../../css/w/wfupqcc6c.css';
import '../../css/j/jd-9hyvzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="f19ei9bez"/><path class="wfupqcc6c wm-a"/><path class="jd-9hyvzp"/></g>`,
		"fallback": "withicons:stroller",
	});
}

export default Component;
