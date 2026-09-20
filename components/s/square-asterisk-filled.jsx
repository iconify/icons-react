import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utftrq6kc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utftrq6kc"/>`,
		"fallback": "tabler:square-asterisk-filled",
	});
}

export default Component;
