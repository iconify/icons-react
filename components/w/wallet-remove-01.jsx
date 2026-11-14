import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bt4xg4ftq.css';
import '../../css/t/tlx_fcsoo.css';
import '../../css/b/brmq_ccvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bt4xg4ftq"/><path class="tlx_fcsoo"/><path class="brmq_ccvb"/></g>`,
		"fallback": "hugeicons:wallet-remove-01",
	});
}

export default Component;
