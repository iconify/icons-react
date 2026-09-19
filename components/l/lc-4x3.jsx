import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kmpqjhb9w.css';
import '../../css/g/go5xbnbte.css';
import '../../css/e/e9rmgbb5f.css';
import '../../css/i/ip1jaebgi.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="kmpqjhb9w"/><path class="go5xbnbte"/><path class="e9rmgbb5f"/><path class="ip1jaebgi"/></g>`,
		"fallback": "flag:lc-4x3",
	});
}

export default Component;
