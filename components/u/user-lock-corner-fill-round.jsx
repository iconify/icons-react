import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou1skzxdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou1skzxdu"/>`,
		"fallback": "coolicons:user-lock-corner-fill-round",
	});
}

export default Component;
