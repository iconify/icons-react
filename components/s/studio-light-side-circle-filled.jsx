import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/r/rslhe9b1x.css';
import '../../css/u/uj3javbwk.css';
import '../../css/u/ufnt8ibas.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGOqbVmdLn"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="rslhe9b1x"/><path class="uj3javbwk"/><path class="ufnt8ibas"/></g></mask></defs><circle mask="url(#SVGOqbVmdLn)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:studio-light-side-circle-filled",
	});
}

export default Component;
