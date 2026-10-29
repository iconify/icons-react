import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rlub1lb-m.css';
import '../../css/p/p_jfkcbaa.css';
import '../../css/x/xrfn3bcyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="rlub1lb-m"/><path class="p_jfkcbaa wm-a"/><path class="xrfn3bcyz"/></g>`,
		"fallback": "withicons:shield-half-duo",
	});
}

export default Component;
