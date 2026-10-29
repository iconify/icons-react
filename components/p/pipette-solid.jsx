import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rmhla4bsl.css';
import '../../css/e/ec0xfgwdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="rmhla4bsl"/><path class="ec0xfgwdv wm-a"/></g>`,
		"fallback": "withicons:pipette-solid",
	});
}

export default Component;
