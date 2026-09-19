import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/z/z3lx3r37r.css';
import '../../css/l/lgog-_bex.css';
import '../../css/k/k4leand_y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="z3lx3r37r"/><path class="lgog-_bex"/><path clip-rule="evenodd" class="k4leand_y"/></g>`,
		"fallback": "icon-park-solid:three-d-glasses",
	});
}

export default Component;
