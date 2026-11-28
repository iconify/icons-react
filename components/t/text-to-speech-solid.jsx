import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rztp92rvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rztp92rvi"/>`,
		"fallback": "iconaut:text-to-speech-solid",
	});
}

export default Component;
