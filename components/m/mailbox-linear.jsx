import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sdeke6b0d.css';
import '../../css/o/ozxu2z9dc.css';
import '../../css/c/c9nmvl4gm.css';
import '../../css/a/afxlu6cvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sdeke6b0d"/><path class="ozxu2z9dc"/><path class="c9nmvl4gm"/><path class="afxlu6cvo"/></g>`,
		"fallback": "solar:mailbox-linear",
	});
}

export default Component;
