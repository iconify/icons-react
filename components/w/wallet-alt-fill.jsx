import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/afct-8b-w.css';
import '../../css/u/uc25ipbmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="afct-8b-w"/><path class="uc25ipbmr"/></g>`,
		"fallback": "lets-icons:wallet-alt-fill",
	});
}

export default Component;
