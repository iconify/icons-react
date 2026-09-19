import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/m/mtr10n2ce.css';
import '../../css/n/n4ediqbxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="mtr10n2ce"/><path class="n4ediqbxe"/></g>`,
		"fallback": "iconamoon:location-pin-bold",
	});
}

export default Component;
