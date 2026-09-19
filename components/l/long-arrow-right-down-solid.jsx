import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqa3tkb1n.css';
import '../../css/r/ra9hgw_ad.css';
import '../../css/s/sds-rdg4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="ra9hgw_ad"/><path class="sds-rdg4s"/></g>`,
		"fallback": "iconoir:long-arrow-right-down-solid",
	});
}

export default Component;
