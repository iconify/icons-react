import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z_o5fnmeb.css';
import '../../css/u/uj_bc55-f.css';
import '../../css/w/wa65fi0wq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z_o5fnmeb"/><path clip-rule="evenodd" class="uj_bc55-f"/><path class="wa65fi0wq"/></g>`,
		"fallback": "healthicons:rdt-result-pv-invalid-rectangular",
	});
}

export default Component;
