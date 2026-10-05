import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/s/snheepb0e.css';
import '../../css/w/wv_hmvbsw.css';
import '../../css/i/iwealhp1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="snheepb0e"/><path class="wv_hmvbsw"/><path class="iwealhp1s"/></g>`,
		"fallback": "matita:upload",
	});
}

export default Component;
