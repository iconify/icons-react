import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue7-78_gf.css';
import '../../css/h/hndxaub8o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue7-78_gf"/><path class="hndxaub8o"/>`,
		"fallback": "cil:language",
	});
}

export default Component;
