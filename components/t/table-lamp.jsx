import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/nin1__b8i.css';
import '../../css/w/wc7kqptyu.css';
import '../../css/i/i4_4y8x4l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="nin1__b8i"/><path class="wc7kqptyu"/><path class="i4_4y8x4l"/></g>`,
		"fallback": "icon-park-solid:table-lamp",
	});
}

export default Component;
