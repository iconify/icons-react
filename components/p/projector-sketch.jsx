import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gdzci1beo.css';
import '../../css/s/sd2p3fbaq.css';
import '../../css/h/h7iic-bcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="gdzci1beo"/><path class="sd2p3fbaq wm-k"/><path class="h7iic-bcm wm-a"/></g>`,
		"fallback": "withicons:projector-sketch",
	});
}

export default Component;
