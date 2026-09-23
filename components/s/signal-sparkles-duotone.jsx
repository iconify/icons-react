import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eso8e-ydo.css';
import '../../css/r/rgaweibev.css';
import '../../css/k/kpjfd_pxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eso8e-ydo"/><path class="rgaweibev"/><path class="kpjfd_pxg"/></g>`,
		"fallback": "keyline-icons:signal-sparkles-duotone",
	});
}

export default Component;
