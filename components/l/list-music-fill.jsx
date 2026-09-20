import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mfg4gqx2s.css';
import '../../css/p/pab-zmevq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mfg4gqx2s"/><path class="pab-zmevq"/></g>`,
		"fallback": "keyline-icons:list-music-fill",
	});
}

export default Component;
