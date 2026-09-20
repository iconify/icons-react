import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y65eu3bqf.css';
import '../../css/t/t457h_ism.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y65eu3bqf"/><path class="t457h_ism"/></g>`,
		"fallback": "tabler:school-off",
	});
}

export default Component;
