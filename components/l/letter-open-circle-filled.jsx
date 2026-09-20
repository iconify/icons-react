import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/v/vuh9j7bmj.css';
import '../../css/l/l6zx7bbpl.css';
import '../../css/s/sklbftbkc.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGOocRPObh"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="vuh9j7bmj"/><path class="l6zx7bbpl"/><path class="sklbftbkc"/></g></mask></defs><circle mask="url(#SVGOocRPObh)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:letter-open-circle-filled",
	});
}

export default Component;
