import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k68800b-x.css';
import '../../css/o/ozxu2z9dc.css';
import '../../css/c/c9nmvl4gm.css';
import '../../css/j/ja-zme36k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k68800b-x"/><path class="ozxu2z9dc"/><path class="c9nmvl4gm"/><path class="ja-zme36k"/></g>`,
		"fallback": "solar:mailbox-line-duotone",
	});
}

export default Component;
