import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b_gf1sbty.css';
import '../../css/t/tfpgcvbes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b_gf1sbty"/><path class="tfpgcvbes"/></g>`,
		"fallback": "keyline-icons:phone-forwarded-fill",
	});
}

export default Component;
