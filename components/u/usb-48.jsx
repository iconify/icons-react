import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d93rrjv5q.css';
import '../../css/f/fi23ronaz.css';
import '../../css/x/xmcfxni0r.css';
import '../../css/w/w577xubjl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d93rrjv5q"/><path class="fi23ronaz"/><path class="xmcfxni0r"/><path class="w577xubjl"/>`,
		"fallback": "energy-icons:usb-48",
	});
}

export default Component;
