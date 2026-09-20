import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/z/zxz-6gxqp.css';
import '../../css/o/o7q2ito4r.css';
import '../../css/z/zj_hrccea.css';
import '../../css/g/g976bubvj.css';
import '../../css/w/wlgll3bfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="zxz-6gxqp"/><path class="o7q2ito4r"/><path class="zj_hrccea"/><path class="g976bubvj"/><path class="wlgll3bfu"/></g>`,
		"fallback": "streamline-sharp-color:star-badge",
	});
}

export default Component;
