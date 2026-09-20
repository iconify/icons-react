import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nofko2bnz.css';
import '../../css/n/n65i98mst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nofko2bnz"/><path class="n65i98mst"/></g>`,
		"fallback": "tabler:lock-bitcoin",
	});
}

export default Component;
