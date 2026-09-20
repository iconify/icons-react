import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s84hulbte.css';
import '../../css/r/rz7rcac5k.css';
import '../../css/o/oasgoj2dk.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s84hulbte"/><path class="rz7rcac5k"/><path class="oasgoj2dk"/></g>`,
		"fallback": "jam:periscope-circle",
	});
}

export default Component;
