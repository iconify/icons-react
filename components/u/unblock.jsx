import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt40imznw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kt40imznw"/>`,
		"fallback": "gg:unblock",
	});
}

export default Component;
