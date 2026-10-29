import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ucrpzibcp.css';
import '../../css/i/idtixcqse.css';
import '../../css/e/ei78qw1bk.css';
import '../../css/q/qwc4vnbsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ucrpzibcp"/><path class="idtixcqse wm-s"/><path class="ei78qw1bk"/><path class="qwc4vnbsf wm-a"/></g>`,
		"fallback": "withicons:siren-duo",
	});
}

export default Component;
