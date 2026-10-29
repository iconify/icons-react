import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/u5mlj-ptc.css';
import '../../css/y/yt3clgbqu.css';
import '../../css/k/kba03cbif.css';
import '../../css/t/tmhadub0c.css';
import '../../css/c/c9y2s_rsd.css';
import '../../css/k/k_y5wliyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="u5mlj-ptc"/><path class="wm-a yt3clgbqu"/><path class="kba03cbif"/><path class="tmhadub0c wm-a"/><path class="c9y2s_rsd"/><path class="k_y5wliyr wm-a"/></g>`,
		"fallback": "withicons:recycle",
	});
}

export default Component;
