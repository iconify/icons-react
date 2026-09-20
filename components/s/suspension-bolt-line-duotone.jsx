import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zb2pnsffz.css';
import '../../css/d/d9t7gkbpm.css';
import '../../css/p/pllnv2f8o.css';
import '../../css/u/u_qt0gbnl.css';
import '../../css/t/te3yvob7u.css';
import '../../css/v/vd3hjpb2c.css';
import '../../css/j/jj8gmw3jw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zb2pnsffz"/><path class="d9t7gkbpm"/><path class="pllnv2f8o"/><path class="u_qt0gbnl"/><path class="te3yvob7u"/><path class="vd3hjpb2c"/><path class="jj8gmw3jw"/></g>`,
		"fallback": "solar:suspension-bolt-line-duotone",
	});
}

export default Component;
