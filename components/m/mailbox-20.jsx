import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxp96ub2p.css';
import '../../css/z/zcyb7gkkg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxp96ub2p"/><path class="zcyb7gkkg"/>`,
		"fallback": "energy-icons:mailbox-20",
	});
}

export default Component;
