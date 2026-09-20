import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zjkywbcdc.css';
import '../../css/l/lwbus7_9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zjkywbcdc"/><path class="lwbus7_9m"/></g>`,
		"fallback": "keyline-icons:leaf-two-tone",
	});
}

export default Component;
