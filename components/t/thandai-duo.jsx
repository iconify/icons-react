import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m4-wfr62v.css';
import '../../css/y/ykr9ewb0l.css';
import '../../css/o/oux-l1bxs.css';
import '../../css/q/qi_k5vohi.css';
import '../../css/g/g9-zxqbbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="m4-wfr62v"/><path class="wm-a ykr9ewb0l"/><path class="oux-l1bxs wm-a"/><path class="qi_k5vohi"/><path class="g9-zxqbbb wm-a"/></g>`,
		"fallback": "withicons:thandai-duo",
	});
}

export default Component;
