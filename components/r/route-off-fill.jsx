import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tfqar0b9x.css';
import '../../css/e/e6r_7bcqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tfqar0b9x"/><path class="e6r_7bcqj"/></g>`,
		"fallback": "keyline-icons:route-off-fill",
	});
}

export default Component;
