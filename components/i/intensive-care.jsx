import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_y2z3b_y.css';
import '../../css/u/ui03rkztx.css';
import '../../css/z/z9vc1bj-r.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_y2z3b_y"/><path class="ui03rkztx"/><path class="z9vc1bj-r"/>`,
		"fallback": "medical-icon:intensive-care",
	});
}

export default Component;
