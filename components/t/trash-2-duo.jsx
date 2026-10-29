import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wsalesqno.css';
import '../../css/f/f_5wg0bxj.css';
import '../../css/a/araeuyb9p.css';
import '../../css/z/zci-1fbna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wsalesqno"/><path class="f_5wg0bxj wm-a"/><path class="araeuyb9p"/><path class="wm-a zci-1fbna"/></g>`,
		"fallback": "withicons:trash-2-duo",
	});
}

export default Component;
