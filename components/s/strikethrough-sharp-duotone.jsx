import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/ytl30t-br.css';
import '../../css/p/pn7hvrb-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ytl30t-br"/><path class="pn7hvrb-k"/></g>`,
		"fallback": "keyline-icons:strikethrough-sharp-duotone",
	});
}

export default Component;
