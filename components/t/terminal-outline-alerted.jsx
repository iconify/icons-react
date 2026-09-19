import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vejvu3b9p.css';
import '../../css/i/ijci-aceu.css';
import '../../css/n/nxd005bzx.css';
import '../../css/s/switkv-0r.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline--alerted clr-i-outline-path-1--alerted vejvu3b9p"/><path class="clr-i-outline--alerted clr-i-outline-path-2--alerted ijci-aceu"/><path class="clr-i-outline--alerted clr-i-outline-path-3--alerted nxd005bzx"/><path class="clr-i-alert clr-i-outline--alerted clr-i-outline-path-4--alerted switkv-0r"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:terminal-outline-alerted",
	});
}

export default Component;
