import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_dv-4xcr.css';
import '../../css/x/xb74i3b_v.css';
import '../../css/q/qh3-d7bck.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_dv-4xcr"/><path class="xb74i3b_v"/><path class="qh3-d7bck"/>`,
		"fallback": "energy-icons:planning-consent-20",
	});
}

export default Component;
