import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8chm4b6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8chm4b6n"/>`,
		"fallback": "tabler:square-letter-m-filled",
	});
}

export default Component;
