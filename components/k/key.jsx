import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ox5o5sxiu.css';
import '../../css/r/r26_rbc1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="ox5o5sxiu"/><path class="r26_rbc1l"/></g>`,
		"fallback": "meteor-icons:key",
	});
}

export default Component;
