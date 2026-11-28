import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjzzi15jw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjzzi15jw"/>`,
		"fallback": "iconaut:message-circle-lock-solid",
	});
}

export default Component;
