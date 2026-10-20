import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/npdjkvbfv.css';
import '../../css/p/pq80gbbxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="npdjkvbfv"/><path class="pq80gbbxe"/></g>`,
		"fallback": "vadivam:wallet-cards",
	});
}

export default Component;
