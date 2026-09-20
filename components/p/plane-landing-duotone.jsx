import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wg0fk4bty.css';
import '../../css/z/z6p69c57u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wg0fk4bty"/><path class="z6p69c57u"/></g>`,
		"fallback": "keyline-icons:plane-landing-duotone",
	});
}

export default Component;
