import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml8v7dbnf.css';
import '../../css/v/vqiudcbyw.css';
import '../../css/p/pv376mv6c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml8v7dbnf"/><path class="vqiudcbyw"/><circle class="pv376mv6c"/>`,
		"fallback": "selfhst:surmai",
	});
}

export default Component;
