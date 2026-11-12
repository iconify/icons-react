import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj4sx_wkb.css';
import '../../css/v/vp08acc_f.css';
import '../../css/k/kpqed-bfm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj4sx_wkb"/><path class="vp08acc_f"/><path class="kpqed-bfm"/>`,
		"fallback": "selfhst:watchtower-light",
	});
}

export default Component;
