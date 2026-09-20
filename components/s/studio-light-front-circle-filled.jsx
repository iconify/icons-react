import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/b/b7wscybiu.css';
import '../../css/j/jjo_i9bfb.css';
import '../../css/t/tg14sl-9g.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGkvhMge9i"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="b7wscybiu"/><path class="jjo_i9bfb"/><path class="tg14sl-9g"/></g></mask></defs><circle mask="url(#SVGkvhMge9i)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:studio-light-front-circle-filled",
	});
}

export default Component;
