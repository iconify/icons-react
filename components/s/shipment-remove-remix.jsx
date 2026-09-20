import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvtm0sbtl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yvtm0sbtl"/>`,
		"fallback": "streamline:shipment-remove-remix",
	});
}

export default Component;
