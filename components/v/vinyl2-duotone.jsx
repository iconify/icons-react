import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m3ihwemum.css';
import '../../css/u/u1d2zpbxx.css';
import '../../css/a/abo8drbzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m3ihwemum"/><path class="u1d2zpbxx"/><path clip-rule="evenodd" class="abo8drbzb"/></g>`,
		"fallback": "reicon:vinyl2-duotone",
	});
}

export default Component;
