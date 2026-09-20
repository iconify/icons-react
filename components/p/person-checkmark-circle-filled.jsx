import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/c/cx5cq0pcw.css';
import '../../css/k/kv8lp-b9a.css';
import '../../css/e/ef-o7abje.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVG7IzrdeNF"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="cx5cq0pcw"/><path class="kv8lp-b9a"/><path class="ef-o7abje"/></g></mask></defs><circle mask="url(#SVG7IzrdeNF)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:person-checkmark-circle-filled",
	});
}

export default Component;
