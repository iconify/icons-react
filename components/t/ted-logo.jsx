import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj6icb6in.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dj6icb6in"/>`,
		"fallback": "streamline-ultimate:ted-logo",
	});
}

export default Component;
