import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e72o9db0j.css';
import '../../css/i/ifwpq1qba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e72o9db0j"/><path class="ifwpq1qba"/></g>`,
		"fallback": "coolicons:server-off-duocolor-round",
	});
}

export default Component;
