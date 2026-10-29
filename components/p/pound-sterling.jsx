import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qf5rlnb_s.css';
import '../../css/r/ro5v85bqf.css';
import '../../css/l/lnysw87pu.css';
import '../../css/c/cxeqomklq.css';
import '../../css/h/h_xsybc4i.css';
import '../../css/u/uu_mg3b0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qf5rlnb_s wm-shadow"/><path class="ro5v85bqf wm-k"/><path class="lnysw87pu wm-k"/><path class="cxeqomklq wm-k"/><path class="h_xsybc4i wm-k"/><path class="uu_mg3b0v wm-shine"/>`,
		"fallback": "withicons-pastel:pound-sterling",
	});
}

export default Component;
