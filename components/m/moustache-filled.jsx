import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adsuwkqyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adsuwkqyw"/>`,
		"fallback": "boxicons:moustache-filled",
	});
}

export default Component;
