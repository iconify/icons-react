import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/w/w22uq_qan.css';
import '../../css/a/apik_nb1s.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGnkL8tb3e"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="w22uq_qan"/><path class="apik_nb1s"/></g></mask></defs><circle mask="url(#SVGnkL8tb3e)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:share-android-circle-filled",
	});
}

export default Component;
