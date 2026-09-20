import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rp-eqwb-s.css';
import '../../css/d/d3h638b2w.css';
import '../../css/p/proq9kbbu.css';
import '../../css/w/w2buv6b-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rp-eqwb-s"/><path class="d3h638b2w"/><path class="proq9kbbu"/><path class="w2buv6b-c"/></g>`,
		"fallback": "tdesign:palace-2",
	});
}

export default Component;
