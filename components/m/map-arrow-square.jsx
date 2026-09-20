import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/ldshm1b2g.css';
import '../../css/u/uukad-bet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ldshm1b2g"/><path class="uukad-bet"/></g>`,
		"fallback": "reicon:map-arrow-square",
	});
}

export default Component;
