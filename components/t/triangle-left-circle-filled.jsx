import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/t/t1vws8b1a.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVG9gZn6cXh"><path class="k5-vjlrin"/><path clip-rule="evenodd" class="t1vws8b1a"/></mask></defs><circle mask="url(#SVG9gZn6cXh)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:triangle-left-circle-filled",
	});
}

export default Component;
