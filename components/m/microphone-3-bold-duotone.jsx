import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue2-q7bvs.css';
import '../../css/o/omzwhtckx.css';
import '../../css/y/ykxzx4ykb.css';
import '../../css/o/o44rtxuym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue2-q7bvs"/><path class="omzwhtckx"/><path class="ykxzx4ykb"/><path clip-rule="evenodd" class="o44rtxuym"/>`,
		"fallback": "solar:microphone-3-bold-duotone",
	});
}

export default Component;
