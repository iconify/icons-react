import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3kb4cgpl.css';
import '../../css/l/lv728hb5d.css';
import '../../css/c/c9w3-fsnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="r3kb4cgpl"><path class="lv728hb5d"/><path class="c9w3-fsnb"/></g>`,
		"fallback": "iconamoon:player-start-bold",
	});
}

export default Component;
