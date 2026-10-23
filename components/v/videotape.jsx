import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rjtzudkag.css';
import '../../css/s/s1t0p4bny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rjtzudkag"/><path class="s1t0p4bny"/></g>`,
		"fallback": "vadivam:videotape",
	});
}

export default Component;
