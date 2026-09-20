import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/melzxt7eq.css';
import '../../css/v/vhimu_b_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="melzxt7eq"/><path class="vhimu_b_c"/></g>`,
		"fallback": "keyline-icons:messages-square-two-tone",
	});
}

export default Component;
