import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kol7kqbto.css';
import '../../css/w/wmm3s4_zx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kol7kqbto"/><path class="wmm3s4_zx"/></g>`,
		"fallback": "coolicons:umbrella-duocolor-round",
	});
}

export default Component;
