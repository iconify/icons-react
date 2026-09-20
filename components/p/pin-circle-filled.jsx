import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/b/bc1ztk9_s.css';
import '../../css/z/z-3c0_b1b.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVG4tI1sdzm"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="bc1ztk9_s"/><path class="z-3c0_b1b"/></g></mask></defs><circle mask="url(#SVG4tI1sdzm)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:pin-circle-filled",
	});
}

export default Component;
