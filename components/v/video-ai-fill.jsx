import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puguj6llg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puguj6llg"/>`,
		"fallback": "ri:video-ai-fill",
	});
}

export default Component;
