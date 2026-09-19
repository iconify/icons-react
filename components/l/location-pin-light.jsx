import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/i/ia2sb4kjz.css';
import '../../css/o/orjgi6bqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="ia2sb4kjz"/><path class="orjgi6bqm"/></g>`,
		"fallback": "iconamoon:location-pin-light",
	});
}

export default Component;
