import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/c/c2xmc696p.css';
import '../../css/l/lpu5gdbsa.css';
import '../../css/e/e67dkccjm.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVG1zkGqeZf"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="c2xmc696p"/><path class="lpu5gdbsa"/><path class="e67dkccjm"/></g></mask></defs><circle mask="url(#SVG1zkGqeZf)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:shield-checkered-circle-filled",
	});
}

export default Component;
