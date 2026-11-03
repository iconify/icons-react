import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uugee_ckg.css';
import '../../css/b/b7_eq70_a.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/c/cn8kflqeu.css';
import '../../css/e/eem25gbjx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uugee_ckg"/><path class="b7_eq70_a"/><g class="ij2x_72vy"><path class="cn8kflqeu"/><path class="eem25gbjx"/></g>`,
		"fallback": "openmoji:pig",
	});
}

export default Component;
