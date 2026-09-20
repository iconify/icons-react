import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/f/f7m35vdiv.css';
import '../../css/s/szoo33b0d.css';
import '../../css/h/hi7mdyluz.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGf0ZqoeiK"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="f7m35vdiv"/><path class="szoo33b0d"/><path class="hi7mdyluz"/></g></mask></defs><circle mask="url(#SVGf0ZqoeiK)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:scissors-circle-filled",
	});
}

export default Component;
