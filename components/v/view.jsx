import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wnn-8inzs.css';
import '../../css/r/rf3s4lbuj.css';
import '../../css/p/ppdzzsb6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wnn-8inzs"/><path class="rf3s4lbuj"/><path class="ppdzzsb6b"/></g>`,
		"fallback": "vadivam:view",
	});
}

export default Component;
