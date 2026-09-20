import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/m/mn4bp7bsf.css';
import '../../css/z/zhk99f-bo.css';
import '../../css/y/ya22fsvpd.css';
import '../../css/c/c1xb2abra.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVG5j8cCuev"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="mn4bp7bsf"/><path class="zhk99f-bo"/><path class="ya22fsvpd"/><path class="c1xb2abra"/></g></mask></defs><circle mask="url(#SVG5j8cCuev)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:move-y-circle-filled",
	});
}

export default Component;
