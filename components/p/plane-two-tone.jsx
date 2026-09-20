import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i9gnhn-bi.css';
import '../../css/v/v68x_pems.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i9gnhn-bi"/><path class="v68x_pems"/></g>`,
		"fallback": "keyline-icons:plane-two-tone",
	});
}

export default Component;
