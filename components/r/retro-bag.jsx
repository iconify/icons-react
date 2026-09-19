import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/s/szuz_1l_t.css';
import '../../css/z/zd46sgbja.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="szuz_1l_t"/><path class="zd46sgbja"/></g>`,
		"fallback": "icon-park-outline:retro-bag",
	});
}

export default Component;
