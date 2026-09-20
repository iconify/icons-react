import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyx3iwnif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyx3iwnif"/>`,
		"fallback": "streamline-ultimate:modern-tv-remote-smart-bold",
	});
}

export default Component;
