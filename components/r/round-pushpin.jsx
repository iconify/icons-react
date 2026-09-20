import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2bmy0o9q.css';
import '../../css/g/gziyv5b8d.css';
import '../../css/i/itupj4a_g.css';
import '../../css/j/jf993rb3h.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/n/n807_sqbh.css';
import '../../css/x/x42gihbor.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2bmy0o9q"/><path class="gziyv5b8d"/><path class="itupj4a_g"/><path class="jf993rb3h"/><g class="ij2x_72vy"><circle class="n807_sqbh"/><path class="x42gihbor"/></g>`,
		"fallback": "openmoji:round-pushpin",
	});
}

export default Component;
