import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/r53mumbjb.css';
import '../../css/h/hmg-5dugg.css';
import '../../css/q/qp833-mnc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="r53mumbjb"/><path class="hmg-5dugg"/><path class="qp833-mnc"/></g>`,
		"fallback": "icon-park-outline:resting",
	});
}

export default Component;
