import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vbgi-85-r.css';
import '../../css/z/zkity_j8j.css';
import '../../css/v/vjg4i6xuo.css';
import '../../css/a/ak0v_fljm.css';
import '../../css/l/lorxxebvu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-rule="evenodd" class="vbgi-85-r"><path class="zkity_j8j"/><path class="vjg4i6xuo"/></g><circle class="ak0v_fljm"/><path class="lorxxebvu"/></g>`,
		"fallback": "pepicons:person-print",
	});
}

export default Component;
