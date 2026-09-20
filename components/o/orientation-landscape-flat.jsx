import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hp4bw2m4h.css';
import '../../css/o/oluu7_b5d.css';
import '../../css/k/k04i15bug.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hp4bw2m4h"/><path class="oluu7_b5d"/><path clip-rule="evenodd" class="k04i15bug"/></g>`,
		"fallback": "streamline-color:orientation-landscape-flat",
	});
}

export default Component;
