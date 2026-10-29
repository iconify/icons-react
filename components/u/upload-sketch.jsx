import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lwe2irtfj.css';
import '../../css/r/r44f4ccwe.css';
import '../../css/m/me8wp88id.css';
import '../../css/j/jumjmi00d.css';
import '../../css/w/wdwbobudd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="lwe2irtfj wm-k"/><path class="r44f4ccwe wm-k"/><path class="me8wp88id wm-k"/><path class="jumjmi00d wm-a"/><path class="wdwbobudd wm-a"/></g>`,
		"fallback": "withicons:upload-sketch",
	});
}

export default Component;
