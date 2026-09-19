import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zc4hxmbhx.css';
import '../../css/s/swcymbbdq.css';
import '../../css/e/e33e2gb6x.css';

const viewBox = {"width":16,"height":18};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="zc4hxmbhx"><path class="swcymbbdq"/><path class="e33e2gb6x"/></g>`,
		"fallback": "catppuccin:phtml",
	});
}

export default Component;
