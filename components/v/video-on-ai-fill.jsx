import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhmi6-ziu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhmi6-ziu"/>`,
		"fallback": "ri:video-on-ai-fill",
	});
}

export default Component;
