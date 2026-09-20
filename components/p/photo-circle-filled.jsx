import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/k/kelkkobbo.css';
import '../../css/f/fi_-pccws.css';
import '../../css/e/e-yamx98d.css';
import '../../css/a/a5mim-b8p.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGESSazcHM"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="kelkkobbo"/><path class="fi_-pccws"/><path clip-rule="evenodd" class="e-yamx98d"/><path clip-rule="evenodd" class="a5mim-b8p"/></g></mask></defs><circle mask="url(#SVGESSazcHM)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:photo-circle-filled",
	});
}

export default Component;
