import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/guz1wgyhn.css';
import '../../css/v/vc7dy5bvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="guz1wgyhn"/><path class="vc7dy5bvq"/></g>`,
		"fallback": "keyline-icons:mic-sparkles",
	});
}

export default Component;
