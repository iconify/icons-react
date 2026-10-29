import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v9ome130x.css';
import '../../css/l/ljy9tlj1f.css';
import '../../css/v/vcac4wbmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="v9ome130x wm-k"/><path class="ljy9tlj1f wm-k"/><path class="vcac4wbmb wm-a"/></g>`,
		"fallback": "withicons:scan-eye-sketch",
	});
}

export default Component;
