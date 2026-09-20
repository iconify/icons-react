import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bbujyitcz.css';
import '../../css/j/jwj5s6brs.css';
import '../../css/i/i3ujk8lbt.css';
import '../../css/f/f76vb05cy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bbujyitcz"/><path class="jwj5s6brs"/><path class="i3ujk8lbt"/><path clip-rule="evenodd" class="f76vb05cy"/></g>`,
		"fallback": "solar:lock-password-unlocked-outline",
	});
}

export default Component;
