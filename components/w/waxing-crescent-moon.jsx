import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/so66xo4jd.css';
import '../../css/y/yc_dn-b3z.css';
import '../../css/x/xfgya8pvb.css';
import '../../css/r/rbykw0r3n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="so66xo4jd"/><path class="yc_dn-b3z"/><path class="xfgya8pvb"/><path class="rbykw0r3n"/></g>`,
		"fallback": "fluent-emoji-flat:waxing-crescent-moon",
	});
}

export default Component;
