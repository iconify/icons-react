import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vnv2k765b.css';
import '../../css/v/v9d7kbn5e.css';
import '../../css/u/um_27sbup.css';
import '../../css/e/e_c-iubxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vnv2k765b"/><path class="v9d7kbn5e"/><circle class="um_27sbup"/><path class="e_c-iubxf"/></g>`,
		"fallback": "solar:station-broken",
	});
}

export default Component;
