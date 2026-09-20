import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hkq4kbb3n.css';
import '../../css/x/xmbylcbap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hkq4kbb3n"/><path class="xmbylcbap"/></g>`,
		"fallback": "vadivam:rotate-ccw-clock",
	});
}

export default Component;
