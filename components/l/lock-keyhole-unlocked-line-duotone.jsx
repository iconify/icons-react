import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mgx0gjb2o.css';
import '../../css/b/bu1hanh7s.css';
import '../../css/e/e2t_fbj3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mgx0gjb2o"/><circle class="bu1hanh7s"/><path class="e2t_fbj3i"/></g>`,
		"fallback": "solar:lock-keyhole-unlocked-line-duotone",
	});
}

export default Component;
