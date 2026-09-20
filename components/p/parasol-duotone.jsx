import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bnhh1-31n.css';
import '../../css/d/d34ut4blf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bnhh1-31n"/><path class="d34ut4blf"/></g>`,
		"fallback": "keyline-icons:parasol-duotone",
	});
}

export default Component;
