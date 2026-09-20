import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lm5qi0b5y.css';
import '../../css/b/b8rqfo09d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lm5qi0b5y"/><path class="b8rqfo09d"/></g>`,
		"fallback": "keyline-icons:test-tube-diagonal-two-tone",
	});
}

export default Component;
