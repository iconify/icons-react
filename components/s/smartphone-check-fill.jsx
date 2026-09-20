import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qnglb7bbo.css';
import '../../css/t/t21ppeieq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="qnglb7bbo"/><path class="t21ppeieq"/></g>`,
		"fallback": "keyline-icons:smartphone-check-fill",
	});
}

export default Component;
