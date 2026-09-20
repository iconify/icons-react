import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/owf9hiboi.css';
import '../../css/x/xmeb_n1nn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="owf9hiboi"/><path class="xmeb_n1nn"/></g>`,
		"fallback": "keyline-icons:search-2-plus-sharp-fill",
	});
}

export default Component;
