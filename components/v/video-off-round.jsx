import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyaubwshj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyaubwshj"/>`,
		"fallback": "coolicons:video-off-round",
	});
}

export default Component;
