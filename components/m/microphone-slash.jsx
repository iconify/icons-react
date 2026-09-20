import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7300j83w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7300j83w"/>`,
		"fallback": "la:microphone-slash",
	});
}

export default Component;
