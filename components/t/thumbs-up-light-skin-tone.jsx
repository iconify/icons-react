import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q80t88b1r.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/p/pf6mklbqq.css';
import '../../css/t/ta8vbjbhp.css';
import '../../css/d/d0hm0kmuv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q80t88b1r"/><g class="brzn_0bpr"><path class="pf6mklbqq"/><path class="ta8vbjbhp"/><path class="d0hm0kmuv"/></g>`,
		"fallback": "openmoji:thumbs-up-light-skin-tone",
	});
}

export default Component;
