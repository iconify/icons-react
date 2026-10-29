import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fkfoqunaf.css';
import '../../css/i/i-58-uedr.css';
import '../../css/l/l7ja-xnch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="fkfoqunaf"/><path class="i-58-uedr wm-k"/><path class="l7ja-xnch wm-a"/></g>`,
		"fallback": "withicons:locate-fixed-sketch",
	});
}

export default Component;
