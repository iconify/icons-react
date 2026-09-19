import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4vcyubbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4vcyubbn"/>`,
		"fallback": "cbi:nest-wifi-router",
	});
}

export default Component;
