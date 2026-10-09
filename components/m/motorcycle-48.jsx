import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dp6r5wbyh.css';
import '../../css/g/gtr6zk6db.css';
import '../../css/d/dl_nt7bof.css';
import '../../css/y/ydacol75i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dp6r5wbyh"/><path class="gtr6zk6db"/><path class="dl_nt7bof"/><path class="ydacol75i"/>`,
		"fallback": "energy-icons:motorcycle-48",
	});
}

export default Component;
