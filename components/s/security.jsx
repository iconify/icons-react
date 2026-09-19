import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rz75sybsq.css';
import '../../css/h/hbry40bnh.css';
import '../../css/x/xto-uckdh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="rz75sybsq"/><path class="hbry40bnh"/><path class="xto-uckdh"/></g>`,
		"fallback": "icon-park-outline:security",
	});
}

export default Component;
