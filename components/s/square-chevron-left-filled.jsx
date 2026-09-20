import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmlm6xvuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmlm6xvuy"/>`,
		"fallback": "tabler:square-chevron-left-filled",
	});
}

export default Component;
