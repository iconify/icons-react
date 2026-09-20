import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjmzeoexf.css';
import '../../css/q/qrbdx9gbx.css';
import '../../css/v/vc7mhgvcb.css';
import '../../css/m/mkp_-2o3y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjmzeoexf"/><path class="qrbdx9gbx"/><path class="vc7mhgvcb"/><path class="mkp_-2o3y"/>`,
		"fallback": "selfhst:ksuite-kpaste",
	});
}

export default Component;
