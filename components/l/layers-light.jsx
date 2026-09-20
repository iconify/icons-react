import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q7dhke2ou.css';
import '../../css/e/eqfcgpbth.css';
import '../../css/p/p4n2f7byf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q7dhke2ou"/><path clip-rule="evenodd" class="eqfcgpbth"/><path clip-rule="evenodd" class="p4n2f7byf"/></g>`,
		"fallback": "lets-icons:layers-light",
	});
}

export default Component;
