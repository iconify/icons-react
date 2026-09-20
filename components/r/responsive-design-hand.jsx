import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kow-4gwby.css';
import '../../css/b/by8hs-7am.css';
import '../../css/k/k10rydwwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="kow-4gwby"/><path class="by8hs-7am"/><path class="k10rydwwe"/></g>`,
		"fallback": "streamline-freehand:responsive-design-hand",
	});
}

export default Component;
