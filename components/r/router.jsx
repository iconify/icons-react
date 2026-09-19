import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n-jost8nj.css';
import '../../css/h/hv4d2qb8d.css';
import '../../css/x/xaqcxbcrv.css';
import '../../css/n/nck8zjbny.css';
import '../../css/r/r89u6hn1j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="n-jost8nj"/><path class="hv4d2qb8d"/><rect class="xaqcxbcrv"/><path class="nck8zjbny"/><path class="r89u6hn1j"/></g>`,
		"fallback": "icon-park:router",
	});
}

export default Component;
