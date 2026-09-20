import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x3cm_ib_i.css';
import '../../css/v/vnm4bnbmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x3cm_ib_i"/><path class="vnm4bnbmm"/></g>`,
		"fallback": "tabler:language-hiragana",
	});
}

export default Component;
