import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h192o0bpw.css';
import '../../css/h/h_9pgub4l.css';
import '../../css/b/bui30ldye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h192o0bpw"/><path class="h_9pgub4l"/><path class="bui30ldye"/></g>`,
		"fallback": "lets-icons:pointers-fill",
	});
}

export default Component;
