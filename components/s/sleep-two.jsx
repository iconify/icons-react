import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/k/ks354ubbl.css';
import '../../css/b/bsddkrbov.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="ks354ubbl"/><circle class="bsddkrbov"/></g>`,
		"fallback": "icon-park-outline:sleep-two",
	});
}

export default Component;
