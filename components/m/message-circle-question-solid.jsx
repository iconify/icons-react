import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inj1tcbzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inj1tcbzo"/>`,
		"fallback": "withicons:message-circle-question-solid",
	});
}

export default Component;
