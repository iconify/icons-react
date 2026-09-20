import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p0in47oqi.css';
import '../../css/a/apxndybzv.css';
import '../../css/c/ceww6gbiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p0in47oqi"/><path class="apxndybzv"/><path class="ceww6gbiz"/></g>`,
		"fallback": "tabler:variable-minus",
	});
}

export default Component;
