import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qzdtwcchf.css';
import '../../css/m/my2uicx3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="qzdtwcchf"/><circle class="my2uicx3v"/></g>`,
		"fallback": "struq:step-current",
	});
}

export default Component;
