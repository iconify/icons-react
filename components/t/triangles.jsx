import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eii5rb1fx.css';
import '../../css/s/svm5jq_fp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eii5rb1fx"/><path class="svm5jq_fp"/></g>`,
		"fallback": "tabler:triangles",
	});
}

export default Component;
