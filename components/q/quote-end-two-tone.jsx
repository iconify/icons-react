import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uidlwq_2j.css';
import '../../css/l/l2b51eb1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uidlwq_2j"/><path class="l2b51eb1j"/></g>`,
		"fallback": "keyline-icons:quote-end-two-tone",
	});
}

export default Component;
