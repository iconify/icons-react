import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qrfn1bbya.css';
import '../../css/o/oqbmi0b8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qrfn1bbya"/><path class="oqbmi0b8v"/></g>`,
		"fallback": "coolicons:leaf-duocolor-round",
	});
}

export default Component;
