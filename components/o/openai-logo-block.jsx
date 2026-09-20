import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhsqq-b_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yhsqq-b_c"/>`,
		"fallback": "streamline-logos:openai-logo-block",
	});
}

export default Component;
