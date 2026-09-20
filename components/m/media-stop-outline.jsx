import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p74ref19a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p74ref19a"/>`,
		"fallback": "typcn:media-stop-outline",
	});
}

export default Component;
