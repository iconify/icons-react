import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri6qttwtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri6qttwtv"/>`,
		"fallback": "vadivam:volume-1",
	});
}

export default Component;
