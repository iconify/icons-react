import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atu1vi6wn.css';
import '../../css/q/qkur7vboz.css';
import '../../css/r/rm2rrp8qs.css';
import '../../css/s/s_-nslbiu.css';
import '../../css/f/ffrfwr2dj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atu1vi6wn"/><path class="qkur7vboz"/><path class="rm2rrp8qs"/><path class="s_-nslbiu"/><path class="ffrfwr2dj"/>`,
		"fallback": "selfhst:kite-kubernetes",
	});
}

export default Component;
