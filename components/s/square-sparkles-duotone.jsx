import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qchgppefq.css';
import '../../css/x/x981ybbsm.css';
import '../../css/m/m0y7m7rpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qchgppefq"/><path class="x981ybbsm"/><path class="m0y7m7rpx"/></g>`,
		"fallback": "lucide-extended:square-sparkles-duotone",
	});
}

export default Component;
