import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/owmyv-bwt.css';
import '../../css/d/d9ysxzb2u.css';
import '../../css/j/jjja0hbbw.css';
import '../../css/y/y6u435q1n.css';
import '../../css/v/vow033b0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="owmyv-bwt"/><path class="d9ysxzb2u"/><path class="jjja0hbbw"/><path class="y6u435q1n"/><path class="vow033b0z"/></g>`,
		"fallback": "solar:ssd-round-line-duotone",
	});
}

export default Component;
