import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h7f1-hqsw.css';
import '../../css/m/me4ih5egx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h7f1-hqsw"/><path class="me4ih5egx"/></g>`,
		"fallback": "lucide:turtle",
	});
}

export default Component;
