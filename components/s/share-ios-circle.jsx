import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/p/p0vszcb6o.css';
import '../../css/b/bzjbox_2i.css';
import '../../css/y/yh8j1i27z.css';
import '../../css/a/ao0t6hy0j.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><path clip-rule="evenodd" class="p0vszcb6o"/><path class="bzjbox_2i"/><path class="yh8j1i27z"/><path class="ao0t6hy0j"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:share-ios-circle",
	});
}

export default Component;
