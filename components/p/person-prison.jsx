import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e7hr_ub1p.css';
import '../../css/y/yt0q85bbz.css';
import '../../css/u/u4vdnnute.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="e7hr_ub1p"/><path class="yt0q85bbz"/><path class="u4vdnnute"/></g>`,
		"fallback": "si-glyph:person-prison",
	});
}

export default Component;
