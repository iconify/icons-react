import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fr5386brj.css';
import '../../css/c/cxlsd5blc.css';
import '../../css/z/zypf8t5ce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fr5386brj"/><path class="cxlsd5blc"/><rect class="zypf8t5ce"/></g>`,
		"fallback": "lucide:sandwich",
	});
}

export default Component;
