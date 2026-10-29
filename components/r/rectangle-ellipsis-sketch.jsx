import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ifoglu75k.css';
import '../../css/m/mq4e_tssq.css';
import '../../css/h/h9-2lpc6b.css';
import '../../css/u/uhkg0vb7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ifoglu75k"/><path class="mq4e_tssq wm-a"/><path class="h9-2lpc6b wm-k"/><path class="uhkg0vb7d wm-a"/></g>`,
		"fallback": "withicons:rectangle-ellipsis-sketch",
	});
}

export default Component;
