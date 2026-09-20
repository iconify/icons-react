import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/o/o4t58_bxy.css';
import '../../css/x/x5rv4lbte.css';
import '../../css/b/b3mln6qlf.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGkzjIPcuI"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path class="o4t58_bxy"/><path class="x5rv4lbte"/><path clip-rule="evenodd" class="b3mln6qlf"/></g></mask></defs><circle mask="url(#SVGkzjIPcuI)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:trash-circle-filled",
	});
}

export default Component;
