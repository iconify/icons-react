import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/y/ysdhzzd7c.css';
import '../../css/b/bl9jv_bnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="ysdhzzd7c"/><path class="bl9jv_bnv"/></g>`,
		"fallback": "streamline-sharp-color:phone-ringing-1",
	});
}

export default Component;
