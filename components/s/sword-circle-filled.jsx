import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/h/h_19n4r8a.css';
import '../../css/x/xib8rybep.css';
import '../../css/l/lgi1zefvt.css';
import '../../css/w/w1_e9pbju.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGa00UybFh"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="h_19n4r8a"/><path class="xib8rybep"/><path class="lgi1zefvt"/><path class="w1_e9pbju"/></g></mask></defs><circle mask="url(#SVGa00UybFh)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:sword-circle-filled",
	});
}

export default Component;
