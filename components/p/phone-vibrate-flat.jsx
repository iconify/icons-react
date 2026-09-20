import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hm0_li9oz.css';
import '../../css/p/pvibm5b-i.css';
import '../../css/w/wuzmabbuo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hm0_li9oz"/><path class="pvibm5b-i"/><path clip-rule="evenodd" class="wuzmabbuo"/></g>`,
		"fallback": "streamline-plump-color:phone-vibrate-flat",
	});
}

export default Component;
