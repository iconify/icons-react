import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g7v2-ye3h.css';
import '../../css/r/rfrpfefci.css';
import '../../css/e/eg4pfcc0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g7v2-ye3h"/><path class="rfrpfefci"/><path clip-rule="evenodd" class="eg4pfcc0n"/></g>`,
		"fallback": "lets-icons:view-horizont-fill",
	});
}

export default Component;
