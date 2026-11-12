import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxxptl7ss.css';
import '../../css/x/xzdvdubue.css';
import '../../css/c/cmmtxw9or.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxxptl7ss"/><path class="xzdvdubue"/><path class="cmmtxw9or"/>`,
		"fallback": "selfhst:mediamanager-dark",
	});
}

export default Component;
