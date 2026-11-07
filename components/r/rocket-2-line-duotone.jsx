import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jrkvf3bcq.css';
import '../../css/k/kqt5nib3p.css';
import '../../css/c/ck_1iolbp.css';
import '../../css/r/rnifwvbbt.css';
import '../../css/k/klkfibbti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jrkvf3bcq"/><path class="kqt5nib3p"/><path class="ck_1iolbp"/><path class="rnifwvbbt"/><path class="klkfibbti"/></g>`,
		"fallback": "solar:rocket-2-line-duotone",
	});
}

export default Component;
