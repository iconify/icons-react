import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx-u_nb3c.css';
import '../../css/j/j2velpbld.css';
import '../../css/c/ceojaobrb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kx-u_nb3c"/><path class="j2velpbld"/><path class="ceojaobrb"/>`,
		"fallback": "ion:md-today",
	});
}

export default Component;
