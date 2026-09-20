import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqd6l4b0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqd6l4b0w"/>`,
		"fallback": "tabler:pencil-filled",
	});
}

export default Component;
