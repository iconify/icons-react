import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/p/pg5rmbcty.css';
import '../../css/q/qz-mrebrm.css';
import '../../css/t/tgxo-cukz.css';
import '../../css/w/w7__z0ipt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><rect class="pg5rmbcty"/><path class="qz-mrebrm"/><circle class="tgxo-cukz"/><path class="w7__z0ipt"/></g>`,
		"fallback": "icon-park-outline:medication-time",
	});
}

export default Component;
