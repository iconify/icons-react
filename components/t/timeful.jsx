import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx2dlcbtb.css';
import '../../css/n/nh52vg31c.css';
import '../../css/a/aewgabcrd.css';
import '../../css/n/nq-623bsk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx2dlcbtb"/><path class="nh52vg31c"/><path class="aewgabcrd"/><path class="nq-623bsk"/>`,
		"fallback": "selfhst:timeful",
	});
}

export default Component;
