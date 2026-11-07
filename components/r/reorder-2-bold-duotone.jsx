import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/u/uws124flx.css';
import '../../css/q/qg7npcbwy.css';
import '../../css/a/a24g1m3ja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="uws124flx"/><path class="qg7npcbwy"/></g><path class="a24g1m3ja"/>`,
		"fallback": "solar:reorder-2-bold-duotone",
	});
}

export default Component;
