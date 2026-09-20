import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m9fwsab7y.css';
import '../../css/a/ag-f_yw_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m9fwsab7y"/><path class="ag-f_yw_g"/></g>`,
		"fallback": "keyline-icons:scan-qr-code-fill",
	});
}

export default Component;
