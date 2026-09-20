import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7q30fbjm.css';
import '../../css/k/k42dqu5-u.css';
import '../../css/r/reokt-boq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7q30fbjm"/><path class="k42dqu5-u"/><path class="reokt-boq"/>`,
		"fallback": "selfhst:rancher-opni",
	});
}

export default Component;
