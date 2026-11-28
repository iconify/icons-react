import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xqunm-tmm.css';
import '../../css/x/xyzpfmoeg.css';
import '../../css/f/flre5izaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="xqunm-tmm"/><path class="xyzpfmoeg"/><path class="flre5izaf"/></g>`,
		"fallback": "iconaut:virus",
	});
}

export default Component;
