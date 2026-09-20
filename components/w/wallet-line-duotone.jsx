import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/acmhcgbix.css';
import '../../css/p/py4d89c_p.css';
import '../../css/i/i2dleueig.css';
import '../../css/b/byf-qcfwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="acmhcgbix"/><path class="py4d89c_p"/><path class="i2dleueig"/><path class="byf-qcfwz"/></g>`,
		"fallback": "solar:wallet-line-duotone",
	});
}

export default Component;
