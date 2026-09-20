import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s-_3y1_8e.css';
import '../../css/z/z2rb1mz4w.css';
import '../../css/a/ag-f_yw_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s-_3y1_8e"/><path class="z2rb1mz4w"/><path class="ag-f_yw_g"/></g>`,
		"fallback": "keyline-icons:scan-qr-code-two-tone",
	});
}

export default Component;
