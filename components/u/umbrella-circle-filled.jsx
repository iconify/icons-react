import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/n/nz3ywrbil.css';
import '../../css/d/dkw17bb7g.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGgroBk0WT"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path class="nz3ywrbil"/><path clip-rule="evenodd" class="dkw17bb7g"/></g></mask></defs><circle mask="url(#SVGgroBk0WT)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:umbrella-circle-filled",
	});
}

export default Component;
