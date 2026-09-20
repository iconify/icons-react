import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbc7sbboh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbc7sbboh"/>`,
		"fallback": "tabler:square-letter-s-filled",
	});
}

export default Component;
