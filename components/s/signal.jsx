import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/sjxgbg2th.css';
import '../../css/t/tf3n6m1cy.css';
import '../../css/l/ljhemfwhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="sjxgbg2th wm-shadow"/><path class="tf3n6m1cy wm-shadow"/><path class="ljhemfwhz"/></g>`,
		"fallback": "withicons-brutal:signal",
	});
}

export default Component;
