import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qd3h75bsl.css';
import '../../css/v/vfdg0hblc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qd3h75bsl"/><path class="vfdg0hblc"/></g>`,
		"fallback": "tabler:sun-moon",
	});
}

export default Component;
