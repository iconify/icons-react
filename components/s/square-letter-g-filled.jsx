import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh2bt7bwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh2bt7bwt"/>`,
		"fallback": "tabler:square-letter-g-filled",
	});
}

export default Component;
