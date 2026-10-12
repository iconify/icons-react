import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c9izbfnnz.css';
import '../../css/z/zcvl_djfq.css';
import '../../css/n/nb5t14bvr.css';
import '../../css/x/xy9ddj-ni.css';
import '../../css/n/nbqssjb9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c9izbfnnz"/><path class="zcvl_djfq"/><path class="nb5t14bvr"/><path class="xy9ddj-ni"/><path class="nbqssjb9c"/></g>`,
		"fallback": "lucide-extended:radius-duotone",
	});
}

export default Component;
