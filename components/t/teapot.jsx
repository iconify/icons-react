import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/wgbk84bhp.css';
import '../../css/h/hj4gt6jmz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="wgbk84bhp"/><path class="hj4gt6jmz"/></g>`,
		"fallback": "icon-park-outline:teapot",
	});
}

export default Component;
