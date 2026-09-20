import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/s/s_lzifb-a.css';
import '../../css/i/ikn_avwec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="s_lzifb-a"/><path class="ikn_avwec"/></g>`,
		"fallback": "streamline-sharp-color:tea-cup",
	});
}

export default Component;
