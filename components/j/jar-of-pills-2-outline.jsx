import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xg86umcwm.css';
import '../../css/l/lmphbqbtw.css';
import '../../css/q/qakxvib_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xg86umcwm"/><path class="lmphbqbtw"/><path clip-rule="evenodd" class="qakxvib_f"/></g>`,
		"fallback": "solar:jar-of-pills-2-outline",
	});
}

export default Component;
