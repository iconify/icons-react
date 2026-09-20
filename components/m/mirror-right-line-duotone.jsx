import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x3dy2qmlr.css';
import '../../css/b/bzh91_bos.css';
import '../../css/c/cipdabcte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x3dy2qmlr"/><path class="bzh91_bos"/><path class="cipdabcte"/></g>`,
		"fallback": "solar:mirror-right-line-duotone",
	});
}

export default Component;
