import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iu_zi1wud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iu_zi1wud"/>`,
		"fallback": "coolicons:video-sparkle-round",
	});
}

export default Component;
