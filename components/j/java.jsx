import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v54u2gi9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v54u2gi9d"/>`,
		"fallback": "streamline-ultimate:java",
	});
}

export default Component;
