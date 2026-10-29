import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/s29_b9bsi.css';
import '../../css/u/u03pt4bmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="s29_b9bsi"/><path class="u03pt4bmq"/></g>`,
		"fallback": "withicons:minus-sketch",
	});
}

export default Component;
