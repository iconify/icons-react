import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g1ircfbdz.css';
import '../../css/t/t41-nubaw.css';
import '../../css/t/t9xso2qjl.css';
import '../../css/d/dpsublimw.css';

const viewBox = {"width":301,"height":259};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g1ircfbdz"/><path class="t41-nubaw"/><path class="t9xso2qjl"/><circle class="dpsublimw"/></g>`,
		"fallback": "cif:ne",
	});
}

export default Component;
