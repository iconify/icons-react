import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bwna43bhr.css';
import '../../css/d/df-j23bjo.css';
import '../../css/o/olf65k9xu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bwna43bhr"/><path class="df-j23bjo"/><path class="olf65k9xu"/></g>`,
		"fallback": "hugeicons:mail-upload-02",
	});
}

export default Component;
