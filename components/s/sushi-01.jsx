import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/x2od90nbo.css';
import '../../css/w/wx677f5yg.css';
import '../../css/i/ipa4u5ria.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="x2od90nbo"/><path class="wx677f5yg"/><path class="ipa4u5ria"/></g>`,
		"fallback": "hugeicons:sushi-01",
	});
}

export default Component;
