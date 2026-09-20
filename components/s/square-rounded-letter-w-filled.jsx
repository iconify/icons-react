import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjd2aeb2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjd2aeb2g"/>`,
		"fallback": "tabler:square-rounded-letter-w-filled",
	});
}

export default Component;
