import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/n/ni4-63bwd.css';
import '../../css/s/s72twwjyh.css';
import '../../css/v/vk_4nwbtj.css';
import '../../css/c/c5jsi6s3c.css';
import '../../css/x/xtabxvbhj.css';
import '../../css/l/l3cnj8bkt.css';
import '../../css/i/itzqn0bzj.css';
import '../../css/u/u2n1hjboa.css';
import '../../css/l/l-1mzqb0n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGeHStKcoy" cx="12.1" cy="-76.2" r="36.8" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset=".85" class="ni4-63bwd"/><stop offset="1" class="ni4-63bwd"/></radialGradient></defs><path class="s72twwjyh"/><path class="vk_4nwbtj"/><path class="c5jsi6s3c"/><path class="xtabxvbhj"/><path class="l3cnj8bkt"/><path fill="url(#SVGeHStKcoy)" transform="rotate(45 -163.973 418.877)scale(2.7)" class="itzqn0bzj"/><path class="u2n1hjboa"/><path class="l-1mzqb0n"/>`,
		"fallback": "xero-emoji:toothbrush",
	});
}

export default Component;
