import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2dlt5bbm.css';
import '../../css/r/ruf7_zb1o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2dlt5bbm"/><path class="ruf7_zb1o"/>`,
		"fallback": "selfhst:metadata-remote",
	});
}

export default Component;
