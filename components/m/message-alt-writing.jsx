import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc9osabtr.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc9osabtr"/>`,
		"fallback": "jam:message-alt-writing",
	});
}

export default Component;
