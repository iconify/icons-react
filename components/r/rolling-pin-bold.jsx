import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pmwvltbwu.css';
import '../../css/b/bso_8zbol.css';
import '../../css/c/cbkt77dxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pmwvltbwu"/><path class="bso_8zbol"/><path class="cbkt77dxd"/></g>`,
		"fallback": "solar:rolling-pin-bold",
	});
}

export default Component;
