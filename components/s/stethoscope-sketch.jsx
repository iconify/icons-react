import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qq0gnmbmc.css';
import '../../css/p/pasc8dbla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qq0gnmbmc"/><path class="pasc8dbla"/></g>`,
		"fallback": "withicons:stethoscope-sketch",
	});
}

export default Component;
