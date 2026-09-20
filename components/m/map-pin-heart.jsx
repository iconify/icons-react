import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e_zwl9bgs.css';
import '../../css/b/bfh7m_b-g.css';
import '../../css/i/imo26mlcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e_zwl9bgs"/><path class="bfh7m_b-g"/><path class="imo26mlcc"/></g>`,
		"fallback": "tabler:map-pin-heart",
	});
}

export default Component;
