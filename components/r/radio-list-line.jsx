import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hnsc5ccym.css';
import '../../css/p/p9vjoqtlo.css';
import '../../css/v/v0dnq2b7o.css';
import '../../css/f/fxwnb7vgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hnsc5ccym"/><circle class="p9vjoqtlo"/><circle class="p9vjoqtlo"/><circle class="v0dnq2b7o"/><circle class="fxwnb7vgp"/></g>`,
		"fallback": "majesticons:radio-list-line",
	});
}

export default Component;
