import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/d/d3-pthtcv.css';
import '../../css/v/vlyj9qu0o.css';
import '../../css/u/ucf_4ybgi.css';
import '../../css/l/lz9mv9bfc.css';
import '../../css/a/akl_5wqvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="d3-pthtcv"/><path class="vlyj9qu0o"/><path class="ucf_4ybgi"/><path class="lz9mv9bfc"/><path class="akl_5wqvt"/></g>`,
		"fallback": "matita:shield-check",
	});
}

export default Component;
