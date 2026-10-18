import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t93vt7bem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t93vt7bem"/>`,
		"fallback": "vadivam:message-circle-more",
	});
}

export default Component;
