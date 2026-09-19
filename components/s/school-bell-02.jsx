import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tngcb0q4r.css';
import '../../css/k/kkdqyclyg.css';
import '../../css/o/or3-8lbcy.css';
import '../../css/b/bld59mbov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="tngcb0q4r"/><path class="kkdqyclyg"/><path class="or3-8lbcy"/><path class="bld59mbov"/></g>`,
		"fallback": "hugeicons:school-bell-02",
	});
}

export default Component;
