import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fieugcb3d.css';
import '../../css/o/o03j2hbdw.css';
import '../../css/f/fda8lylcp.css';
import '../../css/v/v7a-l0b8c.css';
import '../../css/n/nqshk9fhq.css';
import '../../css/k/kd4_v6b3g.css';
import '../../css/g/gse4_4bzi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fieugcb3d"/><ellipse class="o03j2hbdw"/><path class="fda8lylcp"/><path class="v7a-l0b8c"/><path class="nqshk9fhq"/><circle class="kd4_v6b3g"/><circle class="gse4_4bzi"/></g>`,
		"fallback": "icon-park:monkey",
	});
}

export default Component;
