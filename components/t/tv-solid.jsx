import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vr7o58bcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vr7o58bcg"/>`,
		"fallback": "mynaui:tv-solid",
	});
}

export default Component;
