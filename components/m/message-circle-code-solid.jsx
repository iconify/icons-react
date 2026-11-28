import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfb3xu9nn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfb3xu9nn"/>`,
		"fallback": "iconaut:message-circle-code-solid",
	});
}

export default Component;
