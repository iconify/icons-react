import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vsshmivni.css';
import '../../css/n/nboiupjwl.css';
import '../../css/p/php_9kbmo.css';
import '../../css/w/wz_yisuyq.css';
import '../../css/q/qygck_omr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="vsshmivni wm-deco"/><path class="nboiupjwl wm-deco"/><path class="php_9kbmo wm-deco"/><path class="wm-k wz_yisuyq"/><path class="qygck_omr wm-a"/></g>`,
		"fallback": "withicons:screwdriver-blueprint",
	});
}

export default Component;
