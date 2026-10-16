import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2p6qtmid.css';
import '../../css/e/ek7btvb6t.css';
import '../../css/n/nzts02p0o.css';
import '../../css/x/xpvdyjr2m.css';
import '../../css/n/nkaouib7r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2p6qtmid"/><path class="ek7btvb6t"/><path class="nzts02p0o"/><path class="xpvdyjr2m"/><path class="nkaouib7r"/>`,
		"fallback": "energy-icons:trash-restore-20",
	});
}

export default Component;
