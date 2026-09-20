import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f69z4_btz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f69z4_btz"/>`,
		"fallback": "tabler:square-number-8-filled",
	});
}

export default Component;
