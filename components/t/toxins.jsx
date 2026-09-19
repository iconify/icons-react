import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/y/yfht0cwhz.css';
import '../../css/a/ai3i-1iaj.css';
import '../../css/k/kvwgoxdqi.css';
import '../../css/f/fto0fpt6d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path clip-rule="evenodd" class="yfht0cwhz"/><path class="ai3i-1iaj"/><path class="kvwgoxdqi"/><path class="fto0fpt6d"/></g>`,
		"fallback": "icon-park:toxins",
	});
}

export default Component;
