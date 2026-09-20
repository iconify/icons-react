import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2ua6wb4v.css';
import '../../css/h/hel2wrbms.css';
import '../../css/k/kevo0xbxb.css';
import '../../css/s/sqe2gfa0u.css';
import '../../css/x/xpd42gb0r.css';

const viewBox = {"width":256,"height":341};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2ua6wb4v"/><path class="hel2wrbms"/><path class="kevo0xbxb"/><path class="sqe2gfa0u"/><path class="xpd42gb0r"/>`,
		"fallback": "thesvg-color:upstash",
	});
}

export default Component;
