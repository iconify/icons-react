import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxx8p7oda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxx8p7oda"/>`,
		"fallback": "ri:voiceprint-fill",
	});
}

export default Component;
