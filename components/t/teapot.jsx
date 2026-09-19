import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/kv2m18g6m.css';
import '../../css/d/do_ciqhik.css';
import '../../css/v/voz9ctthh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="kv2m18g6m"/><path class="do_ciqhik"/><path class="voz9ctthh"/></g>`,
		"fallback": "icon-park-solid:teapot",
	});
}

export default Component;
