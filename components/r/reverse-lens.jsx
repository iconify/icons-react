import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/d/da_5j4bpz.css';
import '../../css/v/vm1b4_bnl.css';
import '../../css/o/o6ry9g4ed.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="da_5j4bpz"/><path class="vm1b4_bnl"/><path class="o6ry9g4ed"/></g>`,
		"fallback": "icon-park-outline:reverse-lens",
	});
}

export default Component;
