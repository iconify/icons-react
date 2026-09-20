import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/ky8hevb5b.css';
import '../../css/a/ayo73pbzj.css';
import '../../css/f/fpew8tpjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ky8hevb5b"/><path class="ayo73pbzj"/><path class="fpew8tpjl"/></g>`,
		"fallback": "keyline-icons:power-off-duotone",
	});
}

export default Component;
