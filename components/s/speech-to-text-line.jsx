import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t96m9ac6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t96m9ac6z"/>`,
		"fallback": "ri:speech-to-text-line",
	});
}

export default Component;
