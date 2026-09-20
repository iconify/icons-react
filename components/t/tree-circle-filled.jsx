import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/p/pld3dsb2b.css';
import '../../css/o/o5-yfr2st.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGSKdj1bAH"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="pld3dsb2b"/><path class="o5-yfr2st"/></g></mask></defs><circle mask="url(#SVGSKdj1bAH)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:tree-circle-filled",
	});
}

export default Component;
