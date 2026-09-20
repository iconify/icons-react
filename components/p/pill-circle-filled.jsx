import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/x/xfs-vzb_x.css';
import '../../css/t/tq32y62zu.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGC5zVFcBM"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="xfs-vzb_x"/><path class="tq32y62zu"/></g></mask></defs><circle mask="url(#SVGC5zVFcBM)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:pill-circle-filled",
	});
}

export default Component;
