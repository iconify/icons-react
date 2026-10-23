import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bsrv_kbua.css';
import '../../css/t/twty1ix1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bsrv_kbua"/><path class="twty1ix1d"/></g>`,
		"fallback": "vadivam:siren",
	});
}

export default Component;
