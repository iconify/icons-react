import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vr6kbzf1s.css';
import '../../css/s/saty0ibnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vr6kbzf1s"/><path class="saty0ibnk"/></g>`,
		"fallback": "andrsrxn:slash-inverted-square",
	});
}

export default Component;
