import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tc7hgrb-z.css';
import '../../css/m/m90xkws6k.css';
import '../../css/a/an1oj5iwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="tc7hgrb-z"/><path class="m90xkws6k"/><path class="an1oj5iwf"/></g>`,
		"fallback": "hugeicons:mail-account-02",
	});
}

export default Component;
