import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0e7f5gtl.css';
import '../../css/w/wzq2d5gcq.css';
import '../../css/y/ygjyfvpzj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0e7f5gtl"/><path class="wzq2d5gcq"/><path class="ygjyfvpzj"/>`,
		"fallback": "selfhst:steamgriddb-light",
	});
}

export default Component;
