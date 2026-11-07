import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5o71pbee.css';
import '../../css/e/e_lxlzbrz.css';
import '../../css/k/koqepsn2n.css';
import '../../css/d/dciv8jbgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5o71pbee"/><path class="e_lxlzbrz"/><path class="koqepsn2n"/><path class="dciv8jbgc"/>`,
		"fallback": "solar:suitcase-lines-bold-duotone",
	});
}

export default Component;
