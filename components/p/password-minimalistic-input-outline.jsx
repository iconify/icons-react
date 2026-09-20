import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z8fwsc81h.css';
import '../../css/j/jcqbpq0op.css';
import '../../css/x/x8l11yg9a.css';
import '../../css/x/xiby4z7mg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="z8fwsc81h"/><path class="jcqbpq0op"/><path class="x8l11yg9a"/><path class="xiby4z7mg"/></g>`,
		"fallback": "solar:password-minimalistic-input-outline",
	});
}

export default Component;
