import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0_jum4ti.css';
import '../../css/q/q6h8h4bzx.css';
import '../../css/t/txdkxnr7s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0_jum4ti"/><path class="q6h8h4bzx"/><path class="txdkxnr7s"/>`,
		"fallback": "selfhst:qd",
	});
}

export default Component;
