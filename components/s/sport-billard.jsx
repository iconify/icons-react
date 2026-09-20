import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fc1zhqbtz.css';
import '../../css/x/x756dtbrg.css';
import '../../css/v/vbj2lk1_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fc1zhqbtz"/><path class="x756dtbrg"/><path class="vbj2lk1_x"/></g>`,
		"fallback": "tabler:sport-billard",
	});
}

export default Component;
