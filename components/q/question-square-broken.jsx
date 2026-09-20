import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iwfsg6b7f.css';
import '../../css/s/si_mtzbvj.css';
import '../../css/p/pr1jznbmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="iwfsg6b7f"/><path class="si_mtzbvj"/><path class="pr1jznbmm"/></g>`,
		"fallback": "solar:question-square-broken",
	});
}

export default Component;
