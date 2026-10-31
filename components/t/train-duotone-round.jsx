import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uy3enlbmk.css';
import '../../css/m/mo0-_ibpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uy3enlbmk"/><path class="mo0-_ibpa"/></g>`,
		"fallback": "coolicons:train-duotone-round",
	});
}

export default Component;
