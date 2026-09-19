import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/otlqk0b1f.css';
import '../../css/t/tb6awyqzo.css';
import '../../css/u/urbqht-8j.css';
import '../../css/k/k55t2xkdm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="otlqk0b1f"/><path clip-rule="evenodd" class="tb6awyqzo"/><path class="urbqht-8j"/><path clip-rule="evenodd" class="k55t2xkdm"/></g>`,
		"fallback": "glyphs:laptop-code-outline",
	});
}

export default Component;
