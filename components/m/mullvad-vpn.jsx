import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvg3b1btw.css';
import '../../css/i/i_az_4ptl.css';
import '../../css/t/trnnkhiml.css';
import '../../css/m/mm7815c_i.css';
import '../../css/g/g_vunh8kq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvg3b1btw"/><path class="i_az_4ptl"/><path class="trnnkhiml"/><path class="mm7815c_i"/><path class="g_vunh8kq"/>`,
		"fallback": "selfhst:mullvad-vpn",
	});
}

export default Component;
