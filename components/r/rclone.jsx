import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_d602kex.css';
import '../../css/u/u-v0-d6uk.css';
import '../../css/q/qpp9bw75i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_d602kex"/><path class="u-v0-d6uk"/><path class="qpp9bw75i"/>`,
		"fallback": "selfhst:rclone",
	});
}

export default Component;
