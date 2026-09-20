import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/e/e37b-0bjt.css';
import '../../css/a/adl6-qbwr.css';
import '../../css/n/nyy5-63ow.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGlyceqzih"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="e37b-0bjt"/><path class="adl6-qbwr"/><path class="nyy5-63ow"/></g></mask></defs><circle mask="url(#SVGlyceqzih)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:person-plus-circle-filled",
	});
}

export default Component;
