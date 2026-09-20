import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vazhz5-2p.css';
import '../../css/a/auct0ubxy.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vazhz5-2p"/><path class="auct0ubxy"/>`,
		"fallback": "lineicons:money-location",
	});
}

export default Component;
