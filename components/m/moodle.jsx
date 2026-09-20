import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztfe2y7ay.css';
import '../../css/u/u_faizb-m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztfe2y7ay"/><path class="u_faizb-m"/>`,
		"fallback": "selfhst:moodle",
	});
}

export default Component;
