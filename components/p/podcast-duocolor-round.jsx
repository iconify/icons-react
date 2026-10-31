import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b_yr8yb8d.css';
import '../../css/r/rar5j9b-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b_yr8yb8d"/><path class="rar5j9b-h"/></g>`,
		"fallback": "coolicons:podcast-duocolor-round",
	});
}

export default Component;
