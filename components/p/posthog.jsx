import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbssek_nw.css';
import '../../css/p/pv56n73nc.css';
import '../../css/a/a47dmxbwp.css';
import '../../css/p/pkcocdbmn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbssek_nw"/><path class="pv56n73nc"/><path class="a47dmxbwp"/><path class="pkcocdbmn"/>`,
		"fallback": "selfhst:posthog",
	});
}

export default Component;
