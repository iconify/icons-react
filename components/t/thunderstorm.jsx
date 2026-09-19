import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/eydccabfq.css';
import '../../css/z/zpzicwu5k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="eydccabfq"/><path class="zpzicwu5k"/></g>`,
		"fallback": "icon-park-outline:thunderstorm",
	});
}

export default Component;
