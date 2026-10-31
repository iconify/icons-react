import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w6e_frnyg.css';
import '../../css/x/xmbcclbqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w6e_frnyg"/><path class="xmbcclbqu"/></g>`,
		"fallback": "coolicons:martini-duocolor-round",
	});
}

export default Component;
