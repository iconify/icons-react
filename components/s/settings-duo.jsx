import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xjy703kxm.css';
import '../../css/h/hbi8hhkfx.css';
import '../../css/b/bp8ecnj5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="xjy703kxm"/><path class="hbi8hhkfx wm-a"/><path class="bp8ecnj5l"/></g>`,
		"fallback": "withicons:settings-duo",
	});
}

export default Component;
