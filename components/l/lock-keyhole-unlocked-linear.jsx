import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mgx0gjb2o.css';
import '../../css/c/cql1pwtbp.css';
import '../../css/p/pdyvfubiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mgx0gjb2o"/><circle class="cql1pwtbp"/><path class="pdyvfubiy"/></g>`,
		"fallback": "solar:lock-keyhole-unlocked-linear",
	});
}

export default Component;
