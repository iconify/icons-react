import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgbug4bwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgbug4bwy"/>`,
		"fallback": "coolicons:plug-fill-round",
	});
}

export default Component;
