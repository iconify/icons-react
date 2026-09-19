import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu3wmc3lc.css';
import '../../css/q/q19_kfbvt.css';
import '../../css/a/aky-s2bza.css';
import '../../css/i/i0tq2s0-e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zu3wmc3lc"/><path class="q19_kfbvt"/><path class="aky-s2bza"/><path class="i0tq2s0-e"/>`,
		"fallback": "ion:ios-notifications-off",
	});
}

export default Component;
