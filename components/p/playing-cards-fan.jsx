import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/paji3xblq.css';
import '../../css/m/mhf9z2iej.css';
import '../../css/x/xti1obcts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="paji3xblq"/><path class="mhf9z2iej"/><path class="xti1obcts"/></g>`,
		"fallback": "lucide:playing-cards-fan",
	});
}

export default Component;
