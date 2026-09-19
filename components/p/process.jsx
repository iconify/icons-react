import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgmazyb4r.css';
import '../../css/w/wso220b1w.css';
import '../../css/t/t6_kdsuvv.css';
import '../../css/i/i7067ux3m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wgmazyb4r"><path class="wso220b1w"/><path class="t6_kdsuvv"/><path class="i7067ux3m"/></g>`,
		"fallback": "flat-color-icons:process",
	});
}

export default Component;
