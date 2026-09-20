import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mn4bp7bsf.css';
import '../../css/z/zhk99f-bo.css';
import '../../css/y/ya22fsvpd.css';
import '../../css/c/c1xb2abra.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><g clip-rule="evenodd" class="d2kvgvbvc"><path class="mn4bp7bsf"/><path class="zhk99f-bo"/><path class="ya22fsvpd"/><path class="c1xb2abra"/></g><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:move-y-circle-filled",
	});
}

export default Component;
