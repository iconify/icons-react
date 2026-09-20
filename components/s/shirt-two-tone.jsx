import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rvn0e_bwg.css';
import '../../css/u/ux91ibruz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rvn0e_bwg"/><path class="ux91ibruz"/></g>`,
		"fallback": "keyline-icons:shirt-two-tone",
	});
}

export default Component;
