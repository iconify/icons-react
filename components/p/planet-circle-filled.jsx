import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/m/myad80bho.css';
import '../../css/c/cu0c1cc_x.css';
import '../../css/v/v5lftpb7v.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGmhCG6dYL"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="myad80bho"/><path class="cu0c1cc_x"/><path class="v5lftpb7v"/></g></mask></defs><circle mask="url(#SVGmhCG6dYL)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:planet-circle-filled",
	});
}

export default Component;
