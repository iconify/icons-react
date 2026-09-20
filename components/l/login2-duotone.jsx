import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/klk5ys0tc.css';
import '../../css/l/lnsetz3cy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="klk5ys0tc"/><path clip-rule="evenodd" class="lnsetz3cy"/></g>`,
		"fallback": "reicon:login2-duotone",
	});
}

export default Component;
