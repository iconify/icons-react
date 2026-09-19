import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xo4-_ebwm.css';
import '../../css/q/q64hre9aw.css';
import '../../css/l/l7mrtfukn.css';
import '../../css/i/i460-zgba.css';
import '../../css/x/xgckkubpr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><rect class="xo4-_ebwm"/><path class="q64hre9aw"/><path class="l7mrtfukn"/><path class="i460-zgba"/><path class="xgckkubpr"/></g>`,
		"fallback": "icon-park:scan-setting",
	});
}

export default Component;
