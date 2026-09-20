import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iaznofk-p.css';
import '../../css/g/g0smyob9k.css';
import '../../css/u/upffe9zjq.css';
import '../../css/d/dacj2kbmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="iaznofk-p"/><circle class="g0smyob9k"/><circle class="upffe9zjq"/><path class="dacj2kbmi"/></g>`,
		"fallback": "meteor-icons:palette",
	});
}

export default Component;
