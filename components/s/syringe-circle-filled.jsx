import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/a/akxs6rb3u.css';
import '../../css/e/e39n-3-ig.css';
import '../../css/k/kfo6mbbne.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGW9lg2Wxd"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="akxs6rb3u"/><path class="e39n-3-ig"/><path class="kfo6mbbne"/></g></mask></defs><circle mask="url(#SVGW9lg2Wxd)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:syringe-circle-filled",
	});
}

export default Component;
