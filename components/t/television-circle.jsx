import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/l/lg5c2gt0w.css';
import '../../css/m/m77d-pb5a.css';
import '../../css/o/odxvkreir.css';
import '../../css/f/f77bznblk.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><path clip-rule="evenodd" class="lg5c2gt0w"/><path clip-rule="evenodd" class="m77d-pb5a"/><path class="odxvkreir"/><path class="f77bznblk"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:television-circle",
	});
}

export default Component;
