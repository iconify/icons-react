import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a-ewlxb5r.css';
import '../../css/s/sv8__t8-c.css';
import '../../css/d/dz3e1ibvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="a-ewlxb5r"/><path class="sv8__t8-c wm-a"/><path class="dz3e1ibvs"/></g>`,
		"fallback": "withicons:lightbulb-duo",
	});
}

export default Component;
