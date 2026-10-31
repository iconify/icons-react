import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/n/n-5umwbtl.css';
import '../../css/l/lyw6hj5zq.css';
import '../../css/g/g5kjkorhw.css';
import '../../css/u/ux920oebz.css';
import '../../css/r/rucxk0j0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="n-5umwbtl"/><path class="lyw6hj5zq"/><path class="g5kjkorhw"/><path class="ux920oebz"/><path class="rucxk0j0o"/></g>`,
		"fallback": "withicons-retro:surprised",
	});
}

export default Component;
