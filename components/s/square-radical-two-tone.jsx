import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i5lvicvhn.css';
import '../../css/w/w1pb88qcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i5lvicvhn"/><path class="w1pb88qcg"/></g>`,
		"fallback": "keyline-icons:square-radical-two-tone",
	});
}

export default Component;
