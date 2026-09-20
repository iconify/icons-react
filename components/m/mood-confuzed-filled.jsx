import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec1c9ybub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec1c9ybub"/>`,
		"fallback": "tabler:mood-confuzed-filled",
	});
}

export default Component;
