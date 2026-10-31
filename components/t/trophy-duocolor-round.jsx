import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vfecxbbca.css';
import '../../css/t/tawbdub5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vfecxbbca"/><path class="tawbdub5y"/></g>`,
		"fallback": "coolicons:trophy-duocolor-round",
	});
}

export default Component;
