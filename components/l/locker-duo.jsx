import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr99i5n7d.css';
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
		"content": `<path class="qr99i5n7d secondary"/><g class="dt0cm9dhy primary"><path class="agcigacbg"/><path class="gm-xp2qic"/><path class="r6y_hob0j"/><path class="nwwepk7cy"/></g>`,
		"fallback": "iconaut:locker-duo",
	});
}

export default Component;
