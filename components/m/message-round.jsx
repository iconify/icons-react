import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuf2acihv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vuf2acihv"/>`,
		"fallback": "mage:message-round",
	});
}

export default Component;
