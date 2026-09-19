import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3n_o_sbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="more-horizontal-outline"><path class="Vector w3n_o_sbc"/></g>`,
		"fallback": "cuida:more-horizontal-outline",
	});
}

export default Component;
