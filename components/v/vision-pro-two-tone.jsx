import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n6rruibrq.css';
import '../../css/c/czejm_qby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n6rruibrq"/><path class="czejm_qby"/></g>`,
		"fallback": "keyline-icons:vision-pro-two-tone",
	});
}

export default Component;
