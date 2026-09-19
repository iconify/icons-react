import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e3ql4zu8v.css';
import '../../css/x/xcp1ycc0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e3ql4zu8v"/><circle class="xcp1ycc0a"/></g>`,
		"fallback": "akar-icons:key",
	});
}

export default Component;
