import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/embllvbye.css';
import '../../css/d/dhj2y65kq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="embllvbye"/><path class="dhj2y65kq"/></g>`,
		"fallback": "struq:sparkles",
	});
}

export default Component;
