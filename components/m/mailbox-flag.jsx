import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ewe43jc1h.css';
import '../../css/a/a74_fmb6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ewe43jc1h"/><path class="a74_fmb6k"/></g>`,
		"fallback": "lucide-lab:mailbox-flag",
	});
}

export default Component;
