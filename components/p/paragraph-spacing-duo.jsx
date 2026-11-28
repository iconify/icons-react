import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/s_ftu2boq.css';
import '../../css/c/cn4sghbee.css';
import '../../css/d/dyygccboq.css';
import '../../css/q/qvxw8oxvd.css';
import '../../css/l/lzbfpc81r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="s_ftu2boq"/><path class="cn4sghbee"/><path class="dyygccboq"/><path class="qvxw8oxvd"/><path class="lzbfpc81r"/></g>`,
		"fallback": "iconaut:paragraph-spacing-duo",
	});
}

export default Component;
