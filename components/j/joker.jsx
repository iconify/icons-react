import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t8ij2fbdm.css';
import '../../css/q/q6_pmxs6i.css';
import '../../css/a/alq95cbaz.css';
import '../../css/c/cjb0rbclx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="t8ij2fbdm"/><path clip-rule="evenodd" class="q6_pmxs6i"/><path class="alq95cbaz"/><path class="cjb0rbclx"/></g>`,
		"fallback": "glyphs-poly:joker",
	});
}

export default Component;
