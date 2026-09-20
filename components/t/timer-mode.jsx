import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/u/ur5mx2hou.css';
import '../../css/h/hp_dppbrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="ur5mx2hou"/><path class="hp_dppbrs"/></g>`,
		"fallback": "streamline-cyber:timer-mode",
	});
}

export default Component;
