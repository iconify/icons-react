import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/c/cbvjzsq1u.css';
import '../../css/h/hdc_1zb4r.css';
import '../../css/u/u7b6urb1h.css';
import '../../css/s/shmz7ob_a.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGaGkXMdTF"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path class="cbvjzsq1u"/><path class="hdc_1zb4r"/><path class="u7b6urb1h"/><path class="shmz7ob_a"/></g></mask></defs><circle mask="url(#SVGaGkXMdTF)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:open-circle-filled",
	});
}

export default Component;
