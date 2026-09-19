import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/o/owvgdy79c.css';
import '../../css/u/urksymbrn.css';
import '../../css/j/jzy_lab4f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="owvgdy79c"/><path class="urksymbrn"/><path class="jzy_lab4f"/></g>`,
		"fallback": "icon-park-outline:tailoring",
	});
}

export default Component;
