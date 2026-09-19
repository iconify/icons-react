import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfyk-ub-n.css';
import '../../css/h/hbzul7b_q.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfyk-ub-n"/><path class="hbzul7b_q"/>`,
		"fallback": "foundation:rewind-ten",
	});
}

export default Component;
