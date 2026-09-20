import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/w/wmzd77btb.css';
import '../../css/f/fa2xeyb1j.css';
import '../../css/l/lvqax5g6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="wmzd77btb"/><path class="fa2xeyb1j"/><path class="lvqax5g6n"/></g>`,
		"fallback": "lets-icons:wallet-alt",
	});
}

export default Component;
