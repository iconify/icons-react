import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ey756c4jo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ey756c4jo"/>`,
		"fallback": "tabler:square-number-7-filled",
	});
}

export default Component;
