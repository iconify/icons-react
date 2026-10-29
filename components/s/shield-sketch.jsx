import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hbzdspbjk.css';
import '../../css/r/razfpcbqg.css';
import '../../css/w/wjakhsbqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hbzdspbjk"/><path class="razfpcbqg"/><path class="wjakhsbqk"/></g>`,
		"fallback": "withicons:shield-sketch",
	});
}

export default Component;
