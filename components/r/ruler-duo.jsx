import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pgggxhtzb.css';
import '../../css/r/rzoychbjy.css';
import '../../css/f/fmn_qacoy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="pgggxhtzb"/><path class="rzoychbjy wm-a"/><path class="fmn_qacoy"/></g>`,
		"fallback": "withicons:ruler-duo",
	});
}

export default Component;
