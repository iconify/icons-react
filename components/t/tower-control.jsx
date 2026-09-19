import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xyqs10baf.css';
import '../../css/q/qcmyohbss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path clip-rule="evenodd" class="xyqs10baf"/><path class="qcmyohbss"/></g>`,
		"fallback": "hugeicons:tower-control",
	});
}

export default Component;
