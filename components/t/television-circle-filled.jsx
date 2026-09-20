import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/m/m77d-pb5a.css';
import '../../css/o/odxvkreir.css';
import '../../css/f/f77bznblk.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGXrkKjbtg"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="m77d-pb5a"/><path class="odxvkreir"/><path class="f77bznblk"/></g></mask></defs><circle mask="url(#SVGXrkKjbtg)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:television-circle-filled",
	});
}

export default Component;
