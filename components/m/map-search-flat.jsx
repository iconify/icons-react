import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/obpn7bb-f.css';
import '../../css/d/drl1dc-wx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="obpn7bb-f"/><path class="drl1dc-wx"/></g>`,
		"fallback": "streamline-sharp-color:map-search-flat",
	});
}

export default Component;
