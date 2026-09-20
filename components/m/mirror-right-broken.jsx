import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d_kca498a.css';
import '../../css/j/jn20mc0cj.css';
import '../../css/c/cipdabcte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d_kca498a"/><path class="jn20mc0cj"/><path class="cipdabcte"/></g>`,
		"fallback": "solar:mirror-right-broken",
	});
}

export default Component;
