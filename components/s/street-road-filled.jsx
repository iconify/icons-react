import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbno5b9ah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbno5b9ah"/>`,
		"fallback": "tdesign:street-road-filled",
	});
}

export default Component;
