import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p61-0ivql.css';
import '../../css/x/x5e_3_moj.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p61-0ivql"/><path class="x5e_3_moj"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:red-and-black-flag",
	});
}

export default Component;
