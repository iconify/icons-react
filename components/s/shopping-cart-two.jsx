import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/h/h5nrwebnt.css';
import '../../css/v/v29mic7-o.css';
import '../../css/c/cpbjz2bak.css';
import '../../css/n/n38ppybho.css';
import '../../css/h/hev96ikkg.css';
import '../../css/y/yj_x9e7fj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="h5nrwebnt"/><path class="v29mic7-o"/><path class="cpbjz2bak"/><path class="n38ppybho"/><circle class="hev96ikkg"/><circle class="yj_x9e7fj"/></g>`,
		"fallback": "icon-park:shopping-cart-two",
	});
}

export default Component;
