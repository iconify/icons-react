import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/isx5lwb9m.css';
import '../../css/o/oqd-n_bbx.css';
import '../../css/c/cjof1mbpw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="isx5lwb9m"/><path clip-rule="evenodd" class="oqd-n_bbx"/><path class="cjof1mbpw"/></g>`,
		"fallback": "healthicons:thyroid-cancer",
	});
}

export default Component;
