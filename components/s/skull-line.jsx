import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a86yqyqva.css';
import '../../css/c/cbpc6zbgf.css';
import '../../css/w/w6crmdb4u.css';
import '../../css/m/m5eds2f1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a86yqyqva"/><circle class="cbpc6zbgf"/><path class="w6crmdb4u"/><circle class="m5eds2f1v"/></g>`,
		"fallback": "majesticons:skull-line",
	});
}

export default Component;
