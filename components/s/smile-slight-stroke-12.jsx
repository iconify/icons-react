import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/uf8-wnb5o.css';
import '../../css/c/cbuvstbnd.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jg897qbgt.css';
import '../../css/r/r3o12cznv.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="uf8-wnb5o"/><path class="cbuvstbnd"/></g><g class="cuyn6tgcc"><circle class="jg897qbgt"/><circle class="r3o12cznv"/></g>`,
		"fallback": "garden:smile-slight-stroke-12",
	});
}

export default Component;
