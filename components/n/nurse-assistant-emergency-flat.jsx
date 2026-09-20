import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i1lhvwyyv.css';
import '../../css/m/mgag_5day.css';
import '../../css/i/irditn-cy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i1lhvwyyv"/><path class="mgag_5day"/><path class="irditn-cy"/></g>`,
		"fallback": "streamline-flex-color:nurse-assistant-emergency-flat",
	});
}

export default Component;
