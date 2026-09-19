import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/na8hi9wxq.css';
import '../../css/u/ug_z8_zom.css';
import '../../css/l/l74lmhbvl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="na8hi9wxq"/><path class="ug_z8_zom"/><path class="l74lmhbvl"/></g>`,
		"fallback": "fluent-emoji-high-contrast:oden",
	});
}

export default Component;
