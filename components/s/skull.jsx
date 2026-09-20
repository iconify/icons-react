import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/ct5xcv_wg.css';
import '../../css/i/io0ku_jnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ct5xcv_wg"/><path class="io0ku_jnw"/></g>`,
		"fallback": "tabler:skull",
	});
}

export default Component;
