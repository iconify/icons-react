import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/m/mlzx2fbby.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVG7uFZ3n8i"><path class="k5-vjlrin"/><path clip-rule="evenodd" class="mlzx2fbby"/></mask></defs><circle mask="url(#SVG7uFZ3n8i)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:triangle-right-circle-filled",
	});
}

export default Component;
