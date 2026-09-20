import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv-1zrbaw.css';
import '../../css/f/far9sjb5z.css';
import '../../css/r/rzenqebrl.css';
import '../../css/u/usl1t3_kv.css';
import '../../css/m/m_cwhk1xo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv-1zrbaw"/><path class="far9sjb5z"/><path class="rzenqebrl"/><path class="usl1t3_kv"/><path class="m_cwhk1xo"/>`,
		"fallback": "token:mvd",
	});
}

export default Component;
