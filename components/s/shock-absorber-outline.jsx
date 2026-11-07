import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mks2d9e3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mks2d9e3u"/>`,
		"fallback": "solar:shock-absorber-outline",
	});
}

export default Component;
