import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgqev5g_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgqev5g_w"/>`,
		"fallback": "coolicons:umbrella-round",
	});
}

export default Component;
