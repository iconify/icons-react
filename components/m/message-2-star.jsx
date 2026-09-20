import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvw9ldb3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvw9ldb3z"/>`,
		"fallback": "tabler:message-2-star",
	});
}

export default Component;
