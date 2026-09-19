import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/elpv1bbgn.css';
import '../../css/f/f-47owsht.css';
import '../../css/e/ed3l_ac1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGmR7MedNB)"><path class="elpv1bbgn"/><path clip-rule="evenodd" class="f-47owsht"/></g><defs><clipPath id="SVGmR7MedNB"><path class="ed3l_ac1t"/></clipPath></defs></g>`,
		"fallback": "gcp:kuberun",
	});
}

export default Component;
