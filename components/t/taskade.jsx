import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh4z5kbri.css';
import '../../css/v/vhk8n-b7m.css';
import '../../css/h/hlbcq7bvh.css';
import '../../css/p/pdlb79bnc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="vh4z5kbri"/><circle class="vhk8n-b7m"/><path class="hlbcq7bvh"/><path class="pdlb79bnc"/>`,
		"fallback": "selfhst:taskade",
	});
}

export default Component;
