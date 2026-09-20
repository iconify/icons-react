import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/o/ojdl96y2v.css';
import '../../css/r/r5pybk82q.css';
import '../../css/p/p4c1v3blx.css';
import '../../css/g/gkxzbs98m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="ojdl96y2v"/><path class="r5pybk82q"/></g><path class="p4c1v3blx"/><path clip-rule="evenodd" class="gkxzbs98m"/></g>`,
		"fallback": "solar:music-note-slider-bold-duotone",
	});
}

export default Component;
