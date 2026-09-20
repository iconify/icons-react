import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzea66lvs.css';
import '../../css/u/ujyghec7j.css';
import '../../css/e/ewlmhxmrx.css';
import '../../css/b/brjj83bkz.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="zzea66lvs"><rect class="ujyghec7j"/><path class="ewlmhxmrx"/><path class="brjj83bkz"/></g>`,
		"fallback": "system-uicons:lineweight",
	});
}

export default Component;
