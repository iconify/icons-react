import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/usoymbjzl.css';
import '../../css/g/g_us8mbxq.css';
import '../../css/o/ogw2-nb9m.css';
import '../../css/z/zuqh_gv5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="usoymbjzl"/><path class="g_us8mbxq"/><path class="ogw2-nb9m"/><path clip-rule="evenodd" class="zuqh_gv5l"/></g>`,
		"fallback": "solar:send-twice-square-outline",
	});
}

export default Component;
