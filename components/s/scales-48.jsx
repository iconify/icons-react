import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig5ltob0l.css';
import '../../css/l/lv4xmac5c.css';
import '../../css/y/yik1_41pi.css';
import '../../css/f/fizs-zcuf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ig5ltob0l"/><path class="lv4xmac5c"/><path class="yik1_41pi"/><path class="fizs-zcuf"/>`,
		"fallback": "energy-icons:scales-48",
	});
}

export default Component;
