import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/trr-_mkon.css';
import '../../css/i/iwkxsrlmm.css';
import '../../css/k/k5-iasd0n.css';
import '../../css/k/k6irs7b2t.css';
import '../../css/c/csn8e4bgx.css';
import '../../css/n/nj4y0vlwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="trr-_mkon"/><path class="iwkxsrlmm"/><path class="k5-iasd0n"/><path class="k6irs7b2t"/><path class="csn8e4bgx"/><path class="nj4y0vlwz"/></g>`,
		"fallback": "solar:treadmill-line-duotone",
	});
}

export default Component;
