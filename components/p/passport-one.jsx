import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/a/a83-n7b5d.css';
import '../../css/w/wi2d75bbx.css';
import '../../css/l/lnl1wm-up.css';
import '../../css/d/dgogtjsii.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="a83-n7b5d"/><rect transform="rotate(-90 13 44)" class="wi2d75bbx"/><circle class="lnl1wm-up"/><path class="dgogtjsii"/></g>`,
		"fallback": "icon-park-outline:passport-one",
	});
}

export default Component;
