import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gyu74wb_m.css';
import '../../css/q/q6_ymzbeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gyu74wb_m"/><path class="q6_ymzbeh"/></g>`,
		"fallback": "vadivam:square-pen",
	});
}

export default Component;
