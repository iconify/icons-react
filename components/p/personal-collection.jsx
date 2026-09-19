import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/lsj8sgb-n.css';
import '../../css/w/wn0wd7b4u.css';
import '../../css/a/ahjrmcckh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><circle class="lsj8sgb-n"/><path class="wn0wd7b4u"/><path class="ahjrmcckh"/></g>`,
		"fallback": "icon-park:personal-collection",
	});
}

export default Component;
