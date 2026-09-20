import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/h/hwngmwbgs.css';
import '../../css/i/ihfh6lbaa.css';
import '../../css/f/f3gu8ac7c.css';
import '../../css/a/aa--g5dfu.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGCrwA8b7h"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="hwngmwbgs"/><path class="ihfh6lbaa"/><path class="f3gu8ac7c"/><path class="aa--g5dfu"/></g></mask></defs><circle mask="url(#SVGCrwA8b7h)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:microphone-circle-filled",
	});
}

export default Component;
