import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icnpibq3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icnpibq3b"/>`,
		"fallback": "tabler:square-number-0-filled",
	});
}

export default Component;
