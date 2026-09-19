import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/a/a1l92fp8o.css';
import '../../css/z/zs0dq3rum.css';
import '../../css/f/f04qxlbak.css';
import '../../css/c/ctq33tw3u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="a1l92fp8o"/><path class="zs0dq3rum"/><path class="f04qxlbak"/><path class="ctq33tw3u"/></g>`,
		"fallback": "icon-park:sales-report",
	});
}

export default Component;
