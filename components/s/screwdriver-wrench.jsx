import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/l/l_-sbgblz.css';
import '../../css/j/jqq1t27ga.css';
import '../../css/x/xv0ykz_es.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="l_-sbgblz"/><path class="jqq1t27ga"/><path class="xv0ykz_es"/></g>`,
		"fallback": "streamline-sharp-color:screwdriver-wrench",
	});
}

export default Component;
