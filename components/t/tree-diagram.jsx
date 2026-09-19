import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/m690ibn-a.css';
import '../../css/l/l8nwq8bnr.css';
import '../../css/r/r1mdubbli.css';
import '../../css/a/a2lpj-bjx.css';
import '../../css/w/ww5-o3blo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="m690ibn-a"/><circle class="l8nwq8bnr"/><circle class="r1mdubbli"/><circle class="a2lpj-bjx"/><path class="ww5-o3blo"/></g>`,
		"fallback": "icon-park-outline:tree-diagram",
	});
}

export default Component;
