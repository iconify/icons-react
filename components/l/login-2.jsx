import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/k/kbscrrbji.css';
import '../../css/l/lme0_gb3d.css';
import '../../css/h/h44j9ws2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="kbscrrbji"/><path class="lme0_gb3d"/><path class="h44j9ws2e"/></g>`,
		"fallback": "streamline-sharp-color:login-2",
	});
}

export default Component;
