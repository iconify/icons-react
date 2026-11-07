import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mgx0gjb2o.css';
import '../../css/e/e2t_fbj3i.css';
import '../../css/f/fkga9oblt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mgx0gjb2o"/><path class="e2t_fbj3i"/><path class="fkga9oblt"/></g>`,
		"fallback": "solar:lock-password-unlocked-line-duotone",
	});
}

export default Component;
