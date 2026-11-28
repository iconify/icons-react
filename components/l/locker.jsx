import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/agcigacbg.css';
import '../../css/g/gm-xp2qic.css';
import '../../css/r/r6y_hob0j.css';
import '../../css/n/nwwepk7cy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="agcigacbg"/><path class="gm-xp2qic"/><path class="r6y_hob0j"/><path class="nwwepk7cy"/></g>`,
		"fallback": "iconaut:locker",
	});
}

export default Component;
