import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qjql2tbsq.css';
import '../../css/z/z2rb1mz4w.css';
import '../../css/x/x5d-4gpws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qjql2tbsq"/><path class="z2rb1mz4w"/><path clip-rule="evenodd" class="x5d-4gpws"/></g>`,
		"fallback": "keyline-icons:scan-qr-code-duotone",
	});
}

export default Component;
