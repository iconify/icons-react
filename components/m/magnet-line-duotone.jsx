import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/ga9ljm_pz.css';
import '../../css/z/znzepibwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ga9ljm_pz"/><path class="znzepibwq"/></g>`,
		"fallback": "solar:magnet-line-duotone",
	});
}

export default Component;
