import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/q/q66nlkbwx.css';
import '../../css/p/p0ofpd-bo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="q66nlkbwx"/><path class="p0ofpd-bo"/></g>`,
		"fallback": "streamline-sharp-color:page-setting",
	});
}

export default Component;
