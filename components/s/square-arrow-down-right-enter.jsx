import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p_27ktbct.css';
import '../../css/s/s6-h7i0mw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p_27ktbct"/><path class="s6-h7i0mw"/></g>`,
		"fallback": "lucide:square-arrow-down-right-enter",
	});
}

export default Component;
