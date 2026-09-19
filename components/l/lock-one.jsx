import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/n/ngnbouohf.css';
import '../../css/v/vczvbtb_m.css';
import '../../css/l/lag9-94zr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="ngnbouohf"/><path class="vczvbtb_m"/><path class="lag9-94zr"/></g>`,
		"fallback": "icon-park-outline:lock-one",
	});
}

export default Component;
