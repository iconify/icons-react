import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t-9qrsbdi.css';
import '../../css/c/c7avudl9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t-9qrsbdi"/><path class="c7avudl9n"/></g>`,
		"fallback": "tabler:leaf-off",
	});
}

export default Component;
