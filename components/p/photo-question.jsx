import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tm-gl6bcp.css';
import '../../css/q/qgrshsbzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tm-gl6bcp"/><path class="qgrshsbzs"/></g>`,
		"fallback": "tabler:photo-question",
	});
}

export default Component;
