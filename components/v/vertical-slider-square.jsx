import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aitr86bjl.css';
import '../../css/u/udg19pjub.css';
import '../../css/k/kuyc_zbbi.css';
import '../../css/p/p0hwfacrn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="aitr86bjl"/><path class="udg19pjub"/><path class="kuyc_zbbi"/><path class="p0hwfacrn"/></g>`,
		"fallback": "streamline-color:vertical-slider-square",
	});
}

export default Component;
