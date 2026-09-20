import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mlk-77-cy.css';
import '../../css/f/fr_tmn9fp.css';
import '../../css/l/lk387obkc.css';
import '../../css/y/yk80oac5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mlk-77-cy"/><circle class="fr_tmn9fp"/><circle class="lk387obkc"/><circle class="yk80oac5y"/></g>`,
		"fallback": "lucide:user-round-group",
	});
}

export default Component;
