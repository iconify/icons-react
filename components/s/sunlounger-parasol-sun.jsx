import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b1t-tnykf.css';
import '../../css/j/j88e9se0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="b1t-tnykf"/><path class="j88e9se0h"/></g>`,
		"fallback": "lucide-lab:sunlounger-parasol-sun",
	});
}

export default Component;
