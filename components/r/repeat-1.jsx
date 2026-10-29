import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fl1qehb7a.css';
import '../../css/x/xsytezbqj.css';
import '../../css/y/yejwi6q9p.css';
import '../../css/o/oiou_ab0f.css';
import '../../css/u/ug31pzk5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="fl1qehb7a"/><path class="wm-a xsytezbqj"/><path class="yejwi6q9p"/><path class="oiou_ab0f wm-a"/><path class="ug31pzk5c wm-s"/></g>`,
		"fallback": "withicons:repeat-1",
	});
}

export default Component;
