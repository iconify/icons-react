import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/q/q25skokes.css';
import '../../css/t/tbe3lg-0g.css';
import '../../css/z/zev8rnbef.css';
import '../../css/v/v_bm-wbvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="q25skokes"/><path class="tbe3lg-0g"/><path class="zev8rnbef"/><path class="v_bm-wbvw"/></g>`,
		"fallback": "streamline-sharp-color:iris-scan",
	});
}

export default Component;
