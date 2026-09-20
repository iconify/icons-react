import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zjkywbcdc.css';
import '../../css/o/om310-6ti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zjkywbcdc"/><path class="om310-6ti"/></g>`,
		"fallback": "keyline-icons:leaf-duotone",
	});
}

export default Component;
