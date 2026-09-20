import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/s/snefp2m2h.css';
import '../../css/v/vbexpibma.css';
import '../../css/m/mgyyx5bye.css';
import '../../css/p/p9-zrkb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="snefp2m2h"/><path class="vbexpibma"/><path class="mgyyx5bye"/><path class="p9-zrkb4g"/></g>`,
		"fallback": "reicon:repeat-circle",
	});
}

export default Component;
