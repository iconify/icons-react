import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/otu34gkmj.css';
import '../../css/x/xuqkfcnoj.css';
import '../../css/d/dnpvs6bkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="otu34gkmj"/><path class="xuqkfcnoj"/><path class="dnpvs6bkb"/></g>`,
		"fallback": "hugeicons:mail-block-01",
	});
}

export default Component;
