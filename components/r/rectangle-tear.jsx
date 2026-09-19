import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/g/g9w__9_9f.css';
import '../../css/r/rahop_bkr.css';
import '../../css/h/hxhgk1xob.css';
import '../../css/h/hob-fgjds.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="g9w__9_9f"/><path class="rahop_bkr"/><path class="hxhgk1xob"/><path class="hob-fgjds"/></g>`,
		"fallback": "icon-park:rectangle-tear",
	});
}

export default Component;
