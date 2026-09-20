import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u8u0ujbfn.css';
import '../../css/t/tq86e6b7c.css';
import '../../css/u/u3nlt5bzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u8u0ujbfn"/><path class="tq86e6b7c"/><path class="u3nlt5bzy"/></g>`,
		"fallback": "tabler:wallet-off",
	});
}

export default Component;
