import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/v/vcmcnqevp.css';
import '../../css/j/jjo1_neel.css';
import '../../css/r/rbo-2wb8e.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGOV8UNoaA"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="vcmcnqevp"/><path class="jjo1_neel"/><path class="rbo-2wb8e"/></g></mask></defs><circle mask="url(#SVGOV8UNoaA)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:soft-drink-circle-filled",
	});
}

export default Component;
