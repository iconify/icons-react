import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/clklwbbrf.css';
import '../../css/n/n91qcuztc.css';
import '../../css/a/asy0_ebcz.css';
import '../../css/g/g7tt-pbew.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="clklwbbrf"/><path class="n91qcuztc"/><path clip-rule="evenodd" class="asy0_ebcz"/><path class="g7tt-pbew"/></g>`,
		"fallback": "icon-park:people-minus-one",
	});
}

export default Component;
