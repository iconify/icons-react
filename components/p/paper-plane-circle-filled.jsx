import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/i/ifnpf0b1a.css';
import '../../css/e/e7le6cbev.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGOIGHsdrV"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="ifnpf0b1a"/><path class="e7le6cbev"/></g></mask></defs><circle mask="url(#SVGOIGHsdrV)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:paper-plane-circle-filled",
	});
}

export default Component;
