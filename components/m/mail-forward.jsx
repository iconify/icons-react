import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ar3gh-b_e.css';
import '../../css/h/h-rbj_bgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ar3gh-b_e"/><path class="h-rbj_bgn"/></g>`,
		"fallback": "tabler:mail-forward",
	});
}

export default Component;
