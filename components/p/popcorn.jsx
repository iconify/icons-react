import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dezozrg1g.css';
import '../../css/u/uey192bmw.css';
import '../../css/o/oftk5b0cy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dezozrg1g"/><path class="uey192bmw"/><path class="oftk5b0cy"/></g>`,
		"fallback": "andrsrxn:popcorn",
	});
}

export default Component;
