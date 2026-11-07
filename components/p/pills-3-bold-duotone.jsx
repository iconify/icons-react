import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/p/poywaoygi.css';
import '../../css/r/ry2qzlfsr.css';
import '../../css/t/t8urrab6w.css';
import '../../css/v/vdofm9b_y.css';
import '../../css/g/gdpz3cccs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="poywaoygi"/><path class="ry2qzlfsr"/></g><path class="t8urrab6w"/><path class="vdofm9b_y"/><path class="gdpz3cccs"/>`,
		"fallback": "solar:pills-3-bold-duotone",
	});
}

export default Component;
