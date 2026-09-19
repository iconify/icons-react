import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gircq4sqa.css';
import '../../css/a/a9wz156rm.css';
import '../../css/g/gye5x8kso.css';
import '../../css/f/fhcdiobpo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gircq4sqa"/><path class="a9wz156rm"/><path class="gye5x8kso"/><path class="fhcdiobpo"/></g>`,
		"fallback": "pepicons:share-ios-print",
	});
}

export default Component;
