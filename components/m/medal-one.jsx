import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/w/w-nbvvb-v.css';
import '../../css/n/ngnbouohf.css';
import '../../css/s/stxou8bht.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="w-nbvvb-v"/><circle class="ngnbouohf"/><circle class="stxou8bht"/></g>`,
		"fallback": "icon-park-outline:medal-one",
	});
}

export default Component;
