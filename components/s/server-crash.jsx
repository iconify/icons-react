import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r1yq7db4h.css';
import '../../css/u/ux4jel9qf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r1yq7db4h"/><path class="ux4jel9qf"/></g>`,
		"fallback": "lucide:server-crash",
	});
}

export default Component;
