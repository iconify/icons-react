import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ls2ylxzsf.css';
import '../../css/h/h64xwhb-p.css';
import '../../css/b/brxst2bdv.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ls2ylxzsf"/><path class="h64xwhb-p"/><path class="brxst2bdv"/></g>`,
		"fallback": "cif:sl",
	});
}

export default Component;
