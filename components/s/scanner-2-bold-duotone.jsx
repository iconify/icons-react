import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn_frcb-c.css';
import '../../css/b/be94mfb2s.css';
import '../../css/s/s_2g38brn.css';
import '../../css/d/dpxax5b1h.css';
import '../../css/q/qkuad3ljg.css';
import '../../css/x/xhirhl8ql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn_frcb-c"/><path class="be94mfb2s"/><path class="s_2g38brn"/><path class="dpxax5b1h"/><path class="qkuad3ljg"/><path class="xhirhl8ql"/>`,
		"fallback": "solar:scanner-2-bold-duotone",
	});
}

export default Component;
