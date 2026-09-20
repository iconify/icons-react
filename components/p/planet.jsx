import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bhkr1l7aq.css';
import '../../css/h/hwsal5q-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bhkr1l7aq"/><circle class="hwsal5q-o"/></g>`,
		"fallback": "meteor-icons:planet",
	});
}

export default Component;
