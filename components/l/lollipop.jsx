import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ub495bo-g.css';
import '../../css/k/k2_jljtay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ub495bo-g"/><path class="k2_jljtay"/></g>`,
		"fallback": "tabler:lollipop",
	});
}

export default Component;
