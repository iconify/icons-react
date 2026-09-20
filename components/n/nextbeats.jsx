import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_49x_b_v.css';
import '../../css/w/wr-7e-6db.css';
import '../../css/w/wyeldhbnr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_49x_b_v"/><path class="wr-7e-6db"/><path class="wyeldhbnr"/>`,
		"fallback": "selfhst:nextbeats",
	});
}

export default Component;
