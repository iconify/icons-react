import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz9flcc9s.css';
import '../../css/v/vwqq1x5bt.css';
import '../../css/y/yt3p9tmeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz9flcc9s"/><path class="vwqq1x5bt"/><path class="yt3p9tmeq"/>`,
		"fallback": "solar:separator-vertical-outline",
	});
}

export default Component;
