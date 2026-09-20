import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twvwakbbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twvwakbbx"/>`,
		"fallback": "tabler:square-rounded-letter-e-filled",
	});
}

export default Component;
