import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e3m98dbwi.css';
import '../../css/a/adqqsio1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e3m98dbwi"/><path class="adqqsio1k"/></g>`,
		"fallback": "keyline-icons:settings-duotone",
	});
}

export default Component;
