import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewoudhbpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewoudhbpp"/>`,
		"fallback": "tabler:message-2-question",
	});
}

export default Component;
