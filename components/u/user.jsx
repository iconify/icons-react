import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uok9aifay.css';
import '../../css/t/tcwe4ewrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uok9aifay"/><circle class="tcwe4ewrv"/></g>`,
		"fallback": "lucide:user",
	});
}

export default Component;
