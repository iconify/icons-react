import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv5kxtboy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv5kxtboy"/>`,
		"fallback": "ri:mail-ai-line",
	});
}

export default Component;
