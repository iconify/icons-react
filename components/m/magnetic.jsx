import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/utonhxb3c.css';
import '../../css/u/utkzf4pxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="utonhxb3c"/><path class="utkzf4pxe"/></g>`,
		"fallback": "tabler:magnetic",
	});
}

export default Component;
