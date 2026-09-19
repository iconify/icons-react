import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/c/caaopxbqh.css';
import '../../css/t/tuqzf_bkg.css';
import '../../css/o/oth8zfbky.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="caaopxbqh"/><circle class="tuqzf_bkg"/><circle class="oth8zfbky"/></g>`,
		"fallback": "icon-park-outline:shopping-cart-two",
	});
}

export default Component;
