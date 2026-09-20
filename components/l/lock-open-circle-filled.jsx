import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/r/r1xw7kb1y.css';
import '../../css/r/rrq076sgb.css';
import '../../css/b/bwf8l-szx.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVG9zejKcvs"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="r1xw7kb1y"/><path clip-rule="evenodd" class="rrq076sgb"/><path class="bwf8l-szx"/></g></mask></defs><circle mask="url(#SVG9zejKcvs)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:lock-open-circle-filled",
	});
}

export default Component;
