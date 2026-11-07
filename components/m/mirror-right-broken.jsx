import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jg7ou40pg.css';
import '../../css/e/eh6mdhb4g.css';
import '../../css/c/cipdabcte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jg7ou40pg"/><path class="eh6mdhb4g"/><path class="cipdabcte"/></g>`,
		"fallback": "solar:mirror-right-broken",
	});
}

export default Component;
