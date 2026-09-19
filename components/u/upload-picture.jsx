import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djhwg7uhq.css';
import '../../css/n/ncl-bp61j.css';
import '../../css/k/k4liqx2ro.css';
import '../../css/v/vwu45visp.css';
import '../../css/u/ue0ar7bfh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="djhwg7uhq"/><path class="ncl-bp61j"/><path class="k4liqx2ro"/><path class="vwu45visp"/><path class="ue0ar7bfh"/></g>`,
		"fallback": "icon-park:upload-picture",
	});
}

export default Component;
