import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xl-jlp1rp.css';
import '../../css/h/hq-5njbjh.css';
import '../../css/c/cy1x1h35w.css';
import '../../css/m/m8odfe7pt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xl-jlp1rp"/><path class="hq-5njbjh"/><path class="cy1x1h35w"/><path class="m8odfe7pt"/></g>`,
		"fallback": "solar:suitcase-lines-linear",
	});
}

export default Component;
