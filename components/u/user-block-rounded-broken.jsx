import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/u/uwas5gbbp.css';
import '../../css/e/ez1x61b2a.css';
import '../../css/o/o_socdebe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="dtl23o_xq"/><path class="uwas5gbbp"/><circle class="ez1x61b2a"/><path class="o_socdebe"/></g>`,
		"fallback": "solar:user-block-rounded-broken",
	});
}

export default Component;
